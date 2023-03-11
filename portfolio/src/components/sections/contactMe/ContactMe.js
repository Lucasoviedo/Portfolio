import { useForm } from '../../../hooks/useForm'
import Loader from '../../generals/loader/Loader'
import { Modal } from '../../generals/modal/Modal'
import './contactMe.css'

const initialForm = {
    name : '',
    email : '',
    comments : '',
}

const validationForm = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;

    
    if (!form.name.trim()) {
        errors.name = "Field 'Name' is required";
    } else if (!regexName.test(form.name.trim())) {
        errors.name = "Field 'Name' only acepts letters and white spaces";
    }

    if (!form.email.trim()) {
        errors.email = "Field 'Email' is required";
    } else if (!regexEmail.test(form.email.trim())) {
        errors.email = "Invalid format on 'Email' field";
    }

    if (!form.comments.trim()) {
        errors.comments = "Field 'Comments' is required";
    } else if (!regexComments.test(form.comments.trim())) {
        errors.comments = "Field 'Comments' has a limit of 255 characters";
    }

    return errors
}

const ContactMe = () => {

    const {
        form, errors, loading, response, handleBlur, handleChange, handleSubmit
    } = useForm(initialForm , validationForm)

    return (
        <section id='contactMe' className='pruebaaa'>
            <h2>Contact me</h2>
            {loading ? <Loader/> :
                <form onSubmit={handleSubmit} className='contactMe-form'>
                    <div className='contactMe-form-field-div'>
                        <label htmlFor='name' className='contactMe-form-field-label'>Name</label>
                        <input type='text' placeholder='Your name' name='name'
                            onBlur={handleBlur} onChange={handleChange} value={form.name}
                        />
                        {errors.name && <label className='contactMe-form-field-error'>{errors.name}</label>}
                    </div>
                    <div className='contactMe-form-field-div'>
                        <label htmlFor='email' className='contactMe-form-field-label'>E-mail</label>
                        <input type='email' placeholder='Your email' name='email'
                            onBlur={handleBlur} onChange={handleChange} value={form.email}
                        />
                        {errors.email && <label className='contactMe-form-field-error'>{errors.email}</label>}
                    </div>
                    <div className='contactMe-form-field-div'>
                        <label htmlFor='comments' className='contactMe-form-field-label'>Comments</label>
                        <textarea name='comments' cols='50' rows='5' placeholder='Add some comments'
                            onBlur={handleBlur} onChange={handleChange} value={form.comments}
                        />
                        {errors.comments && <label className='contactMe-form-field-error'>{errors.comments}</label>}
                    </div>
                    <button type='submit' value='Send' className='app-button'>Send</button>
                </form>
            }
            {response && 
                <Modal>
                    <h3>¡The email has shipped!</h3>
                </Modal>
            }
        </section>
    )
}

export default ContactMe