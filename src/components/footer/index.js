import { h, Component } from 'preact';
import style from './style';

export default () => (
	<footer className={style.main_footer}>
		<div className={style.container}>
			<div className={style.main_footer__wrap}>
				<div className={style.main_footer__first+' '+style.main_footer__column}>
					<a href="/" className={style.pr_logo+' '+style.main_footer__logo}></a>
					<p className={style.main_footer__text}>
						The new Calendar of Content Ideas <br />
						helps you create stunning<br />
						social media posts 
					</p>
					
					<p className={style.copy}>
						© 2017 All Rights Reserved
					</p>
				</div>
				<nav className={style.main_footer__nav+' '+style.main_footer__column}>
					<li className={style.main_footer__nav_item}>
						<a href="http://promorepublic.com/en/pricing.php">
							Pricing
						</a>
					</li>
					<li className={style.main_footer__nav_item}>
						<a href="http://promorepublic.com/en/agencies.php">
							Agencies
						</a>
					</li>
					<li className={style.main_footer__nav_item}>
						<a href="http://en.promorepublic.com/blog">
							Social Media Academy
						</a>
					</li>
					<li className={style.main_footer__nav_item}>
						<a href="http://promorepublic.com/docs/terms-and-conditions.PromoRepublic.pdf">
							Terms &amp; Conditions
						</a>
					</li>
					<li className={style.main_footer__nav_item}>
						<a href="http://promorepublic.com/docs/privacy-policy.PromoRepublic.pdf">
							Privacy Policy
						</a>
					</li>
				</nav>

				<nav className={style.main_footer__about+' '+style.main_footer__column}>
					<p className={style.about_title}>Company:</p>
						<a href="/en/about.php">
							About
						</a>
						<a href="/en/press.php">
							Press
						</a>
						<a href="/en/careers.php">
							Jobs
						</a>
						<a href="http://get.promorepublic.com/affiliate/">
							Affiliate Program
						</a>
						<a href="http://get.promorepublic.com/partners/">
							Partners
						</a>
				</nav>

				<div className={style.main_footer__integrations+' '+style.main_footer__column}>
					<p className={style.integrations_title}>Integrations:</p>
					<a href="/integrations-buffer/">
						Buffer
					</a>
					<a href="/integrations-hubspot/">
						HubSpot
					</a>
					<a href="http://appdirectory.hootsuite.com/256/promorepublic">
						Hootsuite
					</a>
				</div>

				<div className={style.main_footer__contact+' '+style.main_footer__column}>
                    <div className={style.main_footer__socials}>
                        <p className={style.social_title}>
                            Follow us:
                        </p>
                        <div className={style.social_icons}>
                            <a href="https://www.facebook.com/pages/PromoRepubli%D1%81com/951563951528918?ref=bookmarks" className={style.social_link}>
                                <i class="fa fa-facebook" aria-hidden="true"></i>
                            </a>
                            <a href="https://twitter.com/promo_republic" className={style.social_link}>
                                <i class="fa fa-twitter" aria-hidden="true"></i>
                            </a>
                            <a href="https://www.instagram.com/promorepublic/" className={style.social_link}>
                                <i class="fa fa-instagram" aria-hidden="true"></i> 
                            </a>
                        </div>
                    </div>
                    <div className={style.main_footer__contact_wrap}>                    
                        <p className={style.main_footer__address}>
                            <a href="https://www.google.com.ua/maps/place/PromoRepublic/@37.4455005,-122.164951,17z/data=!4m13!1m7!3m6!1s0x808fbb39dda2b151:0xd4e2740b4c22e34!2s470+Ramona+St,+Palo+Alto,+CA+94301,+USA!3b1!8m2!3d37.4455005!4d-122.1627623!3m4!1s0x808fbb39dda2c9fd:0xa4f5a29ed43fec52!8m2!3d37.4455004!4d-122.1627622">
                                470 Ramona St, Palo Alto, <br />
                                CA 94301, United States
                            </a>
                        </p>
                        <a href="" className={style.main_footer__email}>
                            support@promorepublic.com
                        </a>
                    </div>
                </div>
			</div>
		</div>
	</footer>
 );