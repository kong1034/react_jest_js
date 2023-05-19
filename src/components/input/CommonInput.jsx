import {} from './input.css'

export const CommonInput = (content) => {
    return <input className='common_input' ref={content.props.value} placeholder={content.props.txt}></input>
}