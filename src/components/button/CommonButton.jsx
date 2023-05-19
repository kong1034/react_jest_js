import {} from './CommonButton.css';

export const CommonButton = (content) => {
    return <button className='common_button' onClick={content.props.onClick}>{content.props.txt}</button>
}