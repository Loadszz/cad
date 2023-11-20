import React from 'react'
import Link from "next/link";
import { useLanguageSwitch } from '@/assets/useLanguageSwitch'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import { raleway, unbounded } from '@/assets/fonts/font'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import Services from "@/components/Services";
import Advantages from "@/components/Advantages";
import OurResults from "@/components/OurResults";
import Portfolio from "@/components/Portfolio";
import Reviews from "@/components/Reviews";
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';


export default function Home() {
	const { t, locale, locales, handleClick } = useLanguageSwitch();

	return (
		<wrapper className={`${raleway.variable} ${unbounded.variable} flex flex-col overflow-hidden`}>
			{/* <Header /> */}
			<main>
				<Header />
				<Hero Swiper={Swiper} SwiperSlide={SwiperSlide} Navigation={Navigation} Pagination={Pagination} Autoplay={Autoplay} />
				<Services />
				<Advantages />
				<OurResults />
				<Portfolio />
				<Reviews Swiper={Swiper} SwiperSlide={SwiperSlide} Navigation={Navigation} Pagination={Pagination} Autoplay={Autoplay} />
				<Contact />
				<Footer />
			</main>
		</wrapper>
	)
}

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
		},
	}
}
