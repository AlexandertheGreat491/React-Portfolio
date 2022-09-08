import React from 'react';

function Contact() {
    return (
<section>
    <h1>Contact Me</h1>
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='name'>Name:</label>
            <input type="text" name="name" defaultValue={name} onBlur={handleChange}/>
        </div>
        <div>
            <label htmlFor='email'>Email address:</label>
            <input type="email" name="email" defaultValue={email} onBlur={handleSubmit} />
        </div>
        {errorMessage && (
            <div>
                <p className='error-text'>{errorMessage}</p>
            </div>
        )}
        <button type="submit">Submit</button>
    </form>
</section> 
    );
}


export default Contact;