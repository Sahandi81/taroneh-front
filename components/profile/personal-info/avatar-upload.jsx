import Image from 'next/image';
import styles from '@/styles/components/personal-info.module.scss';
import imageLoader from "@/helpers/imageLoader";
import {useState} from "react";
import {API_URL} from "@/config/index";
import {useDispatch, useSelector} from "react-redux";
import Spinner from "@/components/ui/spinner";
import { setCredentials } from '@/features/auth/authSlice';

export default function AvatarUpload({src, id, onUpload, }) {

    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(null);

    const user = useSelector(state => state.auth.user);
    const  dispatch = useDispatch();
    const handleUploadImage = async (e) => {
        const file = e.target.files[0];
            // console.log(file,'file')
            
        if (file) {
            try {
                setLoading(true);
                const formdata = new FormData();
                formdata.append('file', file);
                formdata.append('phone', user.phone )
                const result = await fetch(
                    `${API_URL}/api/panel/upload_photo`,
                    {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            Authorization: `Bearer ${user.token}`
                        },
                        body: formdata
                    }
                );
                const data = await result.json();

                onUpload(data.file);
                setImage(data.file);
                setLoading(false);
                if(data.success){
                    dispatch(setCredentials({
                        ...user,
                        photo:data.file
                    }));
                }
                // console.log(data);
            } catch (error) {
                setTimeout(() => setLoading(false), 200);
                console.log(error);
            }
        }
    };

  return (
    <div className={styles.avatar_upload}>
      <div className={styles.avatar_preview}>
          {
              loading ? <Spinner /> :<Image
                  loader={imageLoader}
                  src={user?.photo  ? `/storage/${user?.photo}` : `/storage/${id}/${src}`}
                  alt='avatar'
                  width={155}
                  height={155}
                  placeholder='blur'
                  blurDataURL={user?.photo  ? `/storage/${user?.photo}` : `/storage/${id}/${src}`}
              />
          }

      </div>
      <div>
        <label htmlFor='upload'>ویرایش عکس پروفایل</label>
        <input type='file'  id='upload' onChange={handleUploadImage} />
      </div>
    </div>
  );
}
