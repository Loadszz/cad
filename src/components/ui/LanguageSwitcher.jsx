import React from 'react'
import { useLanguageSwitch } from '@/assets/useLanguageSwitch'
import Link from "next/link";

const LanguageSwitcher = () => {
	const { t, locale, locales, handleClick } = useLanguageSwitch();
	const languageName = (lang) => {
		switch (lang) {
			case 'en':
				return 'Eng';
			// case 'ru':
			// 	return 'Рус';
			case 'ua':
				return 'Укр';
			default:
				return lang;
		}
	};
	console.log(locales);
	console.log(locale);
	return (
		<ul className='flex justify-center items-center gap-[8px] backdrop-blur-[21px] bg-myBrown rounded-[32px] border border-myBrown w-[165px] h-[40px]'>
			{locales.map(l => (
				<li key={l} className={`unbounded-regular leading-[24px] ${l == locale ? 'text-black' : 'text-white'}`}><Link
					href={'/'}
					locale={l}
					onClick={handleClick(l)}>
					{languageName(l)}
				</Link></li>
			))}
		</ul>
	)
}

export default LanguageSwitcher