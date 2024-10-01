export default function InputGroup({title, ...props}) {
    return (
        <div>
            <label>{title}</label>
            <input type="number" min="0" {...props} />
        </div>
    )
}