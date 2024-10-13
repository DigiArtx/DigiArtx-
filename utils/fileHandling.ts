export const uriToBlob = (uri: string) => {
    return new Promise<Blob>((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.onload = function () {
            // return the blob
            resolve(xhr.response)
        }
        xhr.onerror = function () {
            reject(new Error('uriToBlob failed'))
        }
        xhr.responseType = 'blob'
        xhr.open('GET', uri, true)

        xhr.send(null)
    })
}

export const convertUrlsToBlob = async (uris: string[]) => {
    let blobs: Blob[] = [];
    try {
        for (let i = 0; i < uris.length; i++) {
            const uri = uris[i];
            const blob = await uriToBlob(uri)
            blobs.push(blob)
        }

        return blobs;
    } catch (err) {
        throw new Error("Error creating blobs from uri's ->> " + err)
    }
}