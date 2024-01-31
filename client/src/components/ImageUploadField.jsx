import axios from 'axios'

// eslint-disable-next-line react/prop-types
export default function ImageUploadField({ image, setImage }) {

  async function handleImageUpload(e) {
    const preset = import.meta.env.VITE_UPLOAD_PRESET
    const file = e.target.files[0]
    const endpoint = import.meta.env.VITE_UPLOAD_URL

    //create form to send to cloud - append file + preset
    const data = new FormData()
    data.append('file', file)
    data.append('upload_preset', preset)

    // send form to endpoint
    const { data: { secure_url } } = await axios.post(endpoint, data)

    setImage(secure_url)
  }

  return (
    <>
      <img className="uploaded-image" src={image} alt="Poxymon Image (transparent background desirable)" />
      <input type="hidden" name="image" value={image} className="imageUpload" />
      <input className="upload-input" type="file" onChange={handleImageUpload} />
    </>
  )
}