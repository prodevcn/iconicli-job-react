import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Dropzone from 'react-dropzone'
import { ReactComponent as Plus } from 'assets/img/icons/plus-symbol.svg'

export default function IcImage(props) {
  const [image, setImage] = useState(null)
  const [imagePath, setImagePath] = useState('')

  const { uploadImage } = useSelector((state) => state.modelImageUpload)

  useEffect(() => {
    if (uploadImage && uploadImage[props.id]) {
      setImage(uploadImage[props.id])
      setImagePath(URL.createObjectURL(uploadImage[props.id]))
    }
  }, [uploadImage, props.id])

  const onDrop = (acceptedFiles) => {
    if (!props.drop) {
      return false
    }
    props.onDrop({ [props.id]: acceptedFiles[0] })
    setImage(acceptedFiles[0])
    setImagePath(URL.createObjectURL(acceptedFiles[0]))
  }

  const onPreview = (e) => {
    if (!props.dragOnImage) {
      e.preventDefault()
      e.stopPropagation()
    }
    props.onPreview()
  }

  return (
    <div className="ic-image">
      <Dropzone onDrop={onDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            {props.drop && <input {...getInputProps()} />}
            <Plus />
            {props.children}
            {image && (
              <span
                style={{ backgroundImage: `url(${imagePath})` }}
                className="ic-image__background"
                onClick={onPreview}
              />
            )}
          </div>
        )}
      </Dropzone>
    </div>
  )
}
