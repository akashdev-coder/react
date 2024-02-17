import images from '../assets/img/service.jpg';

export default function About() {
    return (
        <main>
            <div className="container">
            <div className="row pt-5">
                    <div className="col-12 section text-center">
                        <h1>About <span>us</span></h1>
                    </div>
                </div>
            <div class="row">
					<div className="col-12 col-md-6">
						<img src={images} className="img-fluid" alt="images" />
					</div>
					<div className="col-12 col-md-6 align-self-center">
						<p>Welcome to the <strong>Medical care of healthcare</strong> excellence! At our facility, we prioritize your well-being and are dedicated to providing top-notch medical care. Our team of highly skilled professionals is committed to delivering personalized and compassionate services. Your health is our priority, and we strive to create a supportive environment where you can thrive.</p>

						<p>In our pursuit of healthcare excellence, we embrace cutting-edge medical technologies and stay at the forefront of advancements in medical research. Our state-of-the-art facility is equipped with the latest diagnostic and treatment tools to ensure accurate and efficient care. Our team of doctors, nurses, and support staff undergo continuous training to stay abreast of the latest medical practices, guaranteeing that you receive the <strong>highest standard of care.</strong></p>

						<p>Beyond just treating illnesses, we emphasize preventive healthcare, encouraging a holistic approach to well-being. Our wellness programs and educational initiatives aim to empower you with the knowledge and tools to make informed decisions about your health. We understand the importance of open communication, and <strong>our healthcare professionals are here to listen</strong>, address your concerns, and work collaboratively with you on your healthcare journey.</p>
					</div>

				</div>
            </div>
        </main>
    )
}