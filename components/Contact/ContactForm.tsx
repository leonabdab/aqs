import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import baseUrl from '../../utils/baseUrl'
import { TransFn } from '../../utils/types'
import { useTranslation } from 'react-i18next'


const alertContent = (t: TransFn) => {
    MySwal.fire({
        title: t('successAlert.title'),
        text: t('successAlert.text'),
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

const INITIAL_STATE = {
    name: "",
    email: "",
    number: "",
    subject: "",
    text: ""
};

const ContactForm = () => {
    const { t } = useTranslation('contactForm')

    const [contact, setContact] = useState(INITIAL_STATE);

    const handleChange = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
    }
    
    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        try {
            const url = `${baseUrl}/api/contact`;
            const { name, email, number, subject, text } = contact;
            const payload = { name, email, number, subject, text };
            const response = await axios.post(url, payload);
            console.log(response);
            setContact(INITIAL_STATE);
            alertContent(t);
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <>
            <div className="contact-form">
                <div className="contact-title">
                    <h2>{t('title')}</h2>
                    <p>{t('text')}</p>
                </div>
    
                <form onSubmit={handleSubmit}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        name="name" 
                                        placeholder={t('inputs.name')}
                                        className="form-control" 
                                        value={contact.name}
                                        onChange={handleChange} 
                                        required 
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        name="email" 
                                        placeholder={t('inputs.email')}
                                        className="form-control" 
                                        value={contact.email}
                                        onChange={handleChange} 
                                        required 
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        name="number" 
                                        placeholder={t('inputs.phone')}
                                        className="form-control" 
                                        value={contact.number}
                                        onChange={handleChange} 
                                        required 
                                    />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        name="subject" 
                                        placeholder={t('inputs.subject')}
                                        className="form-control" 
                                        value={contact.subject}
                                        onChange={handleChange} 
                                        required 
                                    />
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                    <textarea 
                                        name="text" 
                                        cols={30}
                                        rows={6}
                                        placeholder={t('inputs.message')} 
                                        className="form-control" 
                                        value={contact.text}
                                        onChange={handleChange} 
                                        required 
                                    />
                                </div>
                            </div>
                            <div className="col-lg-12 col-sm-12">
                                <button type="submit" className="btn btn-primary">
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ContactForm;