import { useForm } from '../../../hooks/useForm'
import Loader from '../../generals/loader/Loader'
import { Modal } from '../../generals/modal/Modal'
import './contactMe.css'

import  { useContext } from "react";
import AccessibilityContext from '../../../contexts/AccessibilityContext';

const initialForm = {
    name : '',
    email : '',
    comments : '',
}

const ContactMe = () => {
    const {fire, texts} = useContext(AccessibilityContext);
    
    const validationForm = (form) => {
        let errors = {};
        let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
        let regexComments = /^.{1,255}$/;
    
        
        if (!form.name.trim()) {
            errors.name = texts.contactMe.nameErrorRequired;
        } else if (!regexName.test(form.name.trim())) {
            errors.name = texts.contactMe.nameErrorRegex;
        }
    
        if (!form.email.trim()) {
            errors.email = texts.contactMe.emailErrorRequired;
        } else if (!regexEmail.test(form.email.trim())) {
            errors.email = texts.contactMe.emailErrorRegex;
        }
    
        if (!form.comments.trim()) {
            errors.comments = texts.contactMe.commentsErrorRequired;
        } else if (!regexComments.test(form.comments.trim())) {
            errors.comments = texts.contactMe.commentsErrorRegex;
        }
    
        return errors
    }

    const {
        form, errors, loading, response, handleBlur, handleChange, handleSubmit
    } = useForm(initialForm , validationForm)

    return (
        <section id='contactMe' className={`section-container ${!fire && "section-container-dark"}`}>
            <div className='container'>
                <h2 className={`${!fire && "text-dark"}`}>{texts.contactMe.title}</h2>
                {loading ? <Loader/> :
                    <form onSubmit={handleSubmit} className='contactMe-form'>
                        <div className='contactMe-form-field-div'>
                            <label htmlFor='name' className='contactMe-form-field-label'>{texts.contactMe.name}</label>
                            <input type='text' placeholder={texts.contactMe.namePlaceholder} name='name' className={`${!fire && "input-dark"}`}
                                onBlur={handleBlur} onChange={handleChange} value={form.name}
                            />
                            {errors.name && <label className='contactMe-form-field-error'>{errors.name}</label>}
                        </div>
                        <div className='contactMe-form-field-div'>
                            <label htmlFor='email' className='contactMe-form-field-label'>{texts.contactMe.email}</label>
                            <input type='email' placeholder={texts.contactMe.emailPlaceholder} name='email' className={`${!fire && "input-dark"}`}
                                onBlur={handleBlur} onChange={handleChange} value={form.email}
                            />
                            {errors.email && <label className='contactMe-form-field-error'>{errors.email}</label>}
                        </div>
                        <div className='contactMe-form-field-div'>
                            <label htmlFor='comments' className='contactMe-form-field-label'>{texts.contactMe.comments}</label>
                            <textarea name='comments' cols='50' rows='5' placeholder={texts.contactMe.commentsPlaceholder}
                                onBlur={handleBlur} onChange={handleChange} value={form.comments} className={`${!fire && "input-dark"}`}
                            />
                            {errors.comments && <label className='contactMe-form-field-error'>{errors.comments}</label>}
                        </div>
                        <button type='submit' value={texts.contactMe.button} className='app-button'>{texts.contactMe.button}</button>
                    </form>
                }
            </div>
            {response && 
                <Modal>
                    <h3>{texts.contactMe.sendComment}</h3>
                </Modal>
            }
        </section>
    )
}

export default ContactMe