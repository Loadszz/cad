import Link from "next/link";
// import { useEffect } from "react";
// import { useTranslation } from "next-i18next"
// import { useRouter } from 'next/router';
import { useLanguageSwitch } from '@/assets/useLanguageSwitch'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import { raleway, unbounded } from '@/assets/fonts/font'
import Services from "@/components/Services";
import Advantages from "@/components/Advantages";


export default function Home() {
	const { t, locale, locales, handleClick } = useLanguageSwitch();
	return (
		<wrapper className={`${raleway.variable} ${unbounded.variable} flex flex-col overflow-hidden`}>
			<Header />
			<main>
				<Hero />
				<Services />
				<Advantages />
				{/* <div>{locale}</div>
				{locales.map(l => (
					<Link href={'/'} locale={l} key={l} onClick={handleClick(l)}>
						{l}
					</Link>
				))} */}
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
