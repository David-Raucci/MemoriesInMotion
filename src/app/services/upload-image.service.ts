import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  private s3 = new S3(
    {
      accessKeyId: 'AKIAT6HSJFKM6XLEYXWT',
      secretAccessKey: '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',
      region: 'us-east-1',
    }
  );

  async fileUpload(file) {
    return new Promise((resolve, reject) => {
      const contentType = file.type;
      const params = {
        Bucket: 'memorybankbucket',
        Key: file.name,
        Body: file,
        ACL: 'public-read',
        ContentType: contentType
      };
      this.s3.upload(params, function (err, data) {
        if (err) {
          console.log('ERROR: ', JSON.stringify(err));
          reject(err)
          return false;
        }
        console.log('File Uploaded.', data);
        resolve(data)
        return true;

      });
    })
  }

  async getImageNames() {
    return new Promise((resolve, reject) => {
      this.s3.listObjectsV2({ Bucket: "memorybankbucket" }, function (err, data) {
        if (err) {
          console.error(err, err.stack);
          reject(err)
        } // an error occurred
        else console.log(data);
        resolve(data.Contents.map(content => 'https://memorybankbucket.s3.amazonaws.com/' + content.Key));
      })
    })
  }

  constructor() { }
}
