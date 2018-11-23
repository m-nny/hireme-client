import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import sha1 from 'sha1'
import superagent from 'superagent'

class Image extends Component {

    uploadFile(files) {
        console.log("uploadFile")
        const image = files[0]

        const cloudName = "dovkbrymg"
        const url = 'https://api.cloudinary.com/v1_1/'+cloudName+'/image/upload'

        const timeStamp = Date.now()/1000
        const uploadPreset = 'kxbt5udd'

        const paramsStr = 'timestamp='+timeStamp+'&upload_preset='+uploadPreset+'nvKAF7_0sdn6rkCcQ75SICBnDEk'

        const signature = sha1(paramsStr)
        const params = {
            'api_key': '281528357297196',
            'timestamp': timeStamp,
            'upload_preset': uploadPreset,
            'signature': signature
        }

        let uploadRequest = superagent.post(url)
        uploadRequest.attach('file', image)

        Object.keys(params).forEach((key) => {
            uploadRequest.field(key, params[key])
        })

        uploadRequest.end((err, resp) => {
            if(err) {
                alert(err)
                return
            }
            console.log("UPLOAD COMPLETE: " + JSON.stringify(resp.body))

        })

    }



    render() {
        return (
            <div>
                <br/>Drop image here<br/>
                <Dropzone onDrop={this.uploadFile.bind(this)}/>
            </div>
        )
    }
}

export default Image