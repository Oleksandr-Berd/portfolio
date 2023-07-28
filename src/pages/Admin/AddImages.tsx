import { ChangeEvent, FormEvent, useState } from "react";


interface IProps {
    submit: (coverImage: object | null, title: string)=>void,

}


const AddImages: React.FC<IProps> = ({submit}): JSX.Element => {
    const [coverImage, setCoverImage] = useState<object | null>(null)
    const [updateTitle, setUpdateTitle] = useState<string>("")

    const handleCoverImage = (evt: ChangeEvent<HTMLInputElement>) => {
        const file = evt.target.files && evt.target.files[0];

        const formData = new FormData();
        if (file) {
            formData.append("avatar", file, file.name);
        }
        setCoverImage(formData)
    }
    
    const handleCoverImageTitle = (evt: ChangeEvent<HTMLInputElement>) => {
        setTimeout(() => {
            setUpdateTitle(evt.target.value)
      }, 300)
    }
    
    const submitCoverImage = (evt: FormEvent<HTMLFormElement>):void => {
        evt.preventDefault()

        submit(coverImage, updateTitle)
    }

    console.log(updateTitle);
    
    return (
        <div>
            <form onSubmit={submitCoverImage}>
                <label>
                    <input type="text" onChange={handleCoverImageTitle}/>
                        Project's title
                </label>
                <label>
                  
                    <input type="file" onChange={handleCoverImage}/>
                Update cover image
            </label>
                <button type="submit" >Submit Cover Image</button>
            </form>
            <form>
                <label>
                    <input type="text" />
                    Project's title
                </label>
                <label>
                    <input type="file" />
                    Update preview images
                </label>
                <button type="submit">Submit Preview Images</button>
        </form>
        </div>
    );
}

export default AddImages;