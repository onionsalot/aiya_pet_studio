import { useMutate } from "../../hooks/use-mutate"
import { useRef } from "react"
import { useTag } from "../../hooks/tag-hooks"
import { useParams } from "react-router"

const TagForm = () => {
    const formRef = useRef()
    const { updateTag } = useMutate()
    const { addTag } = useMutate()
    const { id } = useParams()
    const tag = useTag({ "id": id })

    if (tag.isError) return <h1>Something went wrong!</h1>
    if (tag.isLoading) return <h1>Loading...</h1>

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
                <label className="form-label">
                    Name:
                    <input className="form-input" defaultValue={tag?.data?.data?.data?.tag.name && tag.data.data.data.tag.name} type="text" name="name" required />
                </label>
                <input className="form-submit" type="submit" value="Submit" />
            </form>
        </>
    )
}
export default TagForm