import React, {useState} from 'react'

export const UploadVideo = () => {
  const [tags, setTags] = useState(['running', 'food', 'Saint-Petersburg'])
  const [isFormOpen, toggleForm] = useState(false)
  const formOpenClass = isFormOpen ? '--open' : ''

  const handleSubmit = (e) => {
    e.preventDefault()

    const url = 'example.com'

    const send = fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(tags)
    })
  }

  const addTag = () => {
    const tagInput = document.getElementById('addTag')

    setTags([...tags, tagInput.value])
    tagInput.value = ''
  }

  const removeTag = (e) => {
    const newTags = tags.filter(item => item !== e.target.dataset.name)
    setTags(newTags)
  }

  const tagsList = tags.map(tag => <div onClick={removeTag} data-name={tag} key={Math.random()} className="video-tag">#{tag} </div>)

  return (
      <div className="form-area">
        <h4>add video:</h4>
        <div className="open-form-button" onClick={() => toggleForm(true)}>+</div>
        <form className={formOpenClass + ' upload-form'} method="POST" onSubmit={e => handleSubmit(e)}>
          <div className="upload-form__container">
            <h3>upload form</h3>
            <div className="upload-form__point">
              <label htmlFor="videoname">name your video here</label>
              <input type="text" name="videoname" id="videoname" placeholder="name"/>
            </div>
            <div className="upload-form__point">
              <label htmlFor="addTag">add new video-tag</label>
              <div className="add-tag-box">
                <input type="text" name="addTag" id="addTag" />
                <input type="hidden" name="tags" id="tags" value={tags}/>
                <div className="add-tag-btn" onClick={addTag}>+</div>
              </div>
              <div>
                Tags: {tagsList}
              </div>
            </div>
            <div className="upload-form__point">
              <label htmlFor="videofile">upload video here</label>
              <input type="file" name="videofile" id="videofile"/>
            </div>
            <div className="upload-form__point">
              <label htmlFor="videopicture">upload video picture here</label>
              <input type="file" name="videopicture" id="videopicture"/>
            </div>
            <div className="upload-form__point">
              <input className="upload-form__submit-btn" type="submit" value="Let's upload it"/>
            </div>
          </div>
        </form>
      </div>
  )
}

export default UploadVideo
