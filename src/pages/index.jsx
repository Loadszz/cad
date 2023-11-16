import Link from "next/link";
import { useLanguageSwitch } from '@/assets/useLanguageSwitch'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import { raleway, unbounded } from '@/assets/fonts/font'
import Services from "@/components/Services";
import Advantages from "@/components/Advantages";
import OurResults from "@/components/OurResults";
import Portfolio from "@/components/Portfolio";


export default function Home() {
	const { t, locale, locales, handleClick } = useLanguageSwitch();
	return (
		<wrapper className={`${raleway.variable} ${unbounded.variable} flex flex-col overflow-hidden`}>
			{/* <Header /> */}
			<main>
				<Header />
				<Hero />
				<Services />
				<Advantages />
				<OurResults />
				<Portfolio />
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
