import { h, Component } from 'preact';
import style from './style';

export default () => (
	<section className={style.about__section +' '+ style.careers__section}> 
		<div className={style.about__wrap}>
			<div className={style.about__sub_container}>
				<h1 className={style.about__h1}>
					We are hiring
				</h1>
			</div>
			<div>
				<img src="http://promorepublic.com/img-new/careers/team.jpg" alt="PromoRepublic Team" className={style.careers__team_photo}/>
			</div>
			<div className={style.about__sub_container}>
				<div className={style.positions+' '+style.about__text} style="margin-top:20px;">
					<h2 className={style.about__h2+' '+style.careers__h2}>
						Open positions
					</h2>
					<div className={style.vacancies}>
						<a href="career.php?id=1" className={style.vacancies__link}>
							Rockstar Customer Success Leads
						</a>
					</div>
					<div className={style.vacancies}>
						<a href="career.php?id=2" className={style.vacancies__link}>
							Badass Chief Content Producer
						</a>
					</div>
					<div className={style.vacancies}>
						<a href="career.php?id=3" className={style.vacancies__link}>
							Social Media Marketing Top Hat / Evangelist
						</a>
					</div>				
				</div>
			</div>
		</div> 
	</section>
  );