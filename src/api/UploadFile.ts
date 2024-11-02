import CloudServer from "./CloudServer";
import axios from "axios";


class UploadFile {


    async uploadAvatar(file: File, fileName: string) {
        const res = await CloudServer.postRequestPromise('upload-avatar', {}, false);
        if (res.msg === 'success'){
            const uploadUrl                           = res.uploadUrl;
            const uploadAuthorizationToken            = res.uploadAuthorizationToken;
            const filename                            = `${fileName}.png`;
            await axios.post( uploadUrl, file, {
            withCredentials: true,
            headers: {
                Authorization: uploadAuthorizationToken,
                'Content-Type': 'b2/x-auto',
                'X-Bz-File-Name': `${filename}`,
                'X-Bz-Content-Sha1': 'do_not_verify',
            },
                onUploadProgress: ({ loaded, total }) => {
                    console.log( `${loaded}b of ${total}b` );
                }
            } )
            return {
                'msg': 'success',
                'url': `https://f002.backblazeb2.com/file/Edutech-Avatars/${filename}`
            } 
        }
        else{
            return {
                'msg': 'fail'
            } 
        }
    }
}

export default new UploadFile()


