import { useMutate } from "../../hooks/use-mutate"
import { useRef } from "react"
import { useTags } from "../../hooks/tag-hooks"
import { useParams } from "react-router"

const TagForm = () => {
    const formRef = useRef()
    const { updateTag } = useMutate()
    const { addTag } = useMutate()
    const { id } = useParams()
    const { data } = useTags()
    const currentTag = data.data.data.tags.find(tag => tag.id === id)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(formRef.current)
        const data = Object.fromEntries(formData)
        if (!id) {
            const input = { name: data.name }
            addTag.mutate(input)
        } else {
            const input = { id: id, name: data.name }
            updateTag.mutate(input)
        }
    }
    
    return (
        <>
            <form ref={formRef} onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input defaultValue={currentTag ? currentTag.name : ""} type="name" name="name" required />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}
export default TagForm