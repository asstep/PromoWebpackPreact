import { h, Component } from 'preact';
import style from './style';

export default () => (
	<section className={style.about__main_section}> 
		<div className={style.container}>
			<header className={style.main_header}>
				<a href="/" className={style.main_header_logo}></a>
				<div className={style.main_header__wrap}>
					<nav className={style.main_nav}>
						<li className={style.main_nav__item}>
							<a href="/en/pricing.php">
								Pricing
							</a>
						</li>
						<li className={style.main_nav__item}>
							<a href="/en/agencies.php">
								Agencies
							</a>
						</li>
						<li className={style.main_nav__item}>
							<a href="/en/careers.php">
								Jobs
							</a>
						</li>
						<li className={style.main_nav__item}>
							<a href="http://en.promorepublic.com/blog">
								Social Media Academy
							</a>
						</li>
					</nav>
					<div className={style.main_header__controls}>
						<a href="http://app.promorepublic.com/en" className={style.pr_btn+' '+style.btn_rect}>
							Sign in
						</a>
						<a href="http://app.promorepublic.com#signup" className={style.pr_btn+' '+style.btn_rect+' '+style.demo}>
							Get Started
						</a>
					</div>
				</div>
			</header>
			<div className={style.about__nav_wrap}>
				<nav className={style.about__nav}>
					<a className={style.about__nav_link} href="about.php">About</a>
					<a className={style.about__nav_link} href="press.php">Press</a>
					<a class={style.about__nav_link +' '+ style.active} href="careers.php">Jobs</a>
				</nav>
			</div>
		</div>
	</section>
  );