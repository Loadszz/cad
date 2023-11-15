import { Link } from 'react-scroll';
import { useLanguageSwitch } from '@/assets/useLanguageSwitch'


const Nav = ({ className }) => {
	const { t, locale, locales, handleClick } = useLanguageSwitch();
	return (
		<nav className='w-full lp:mb-[50px]'>
			<ul className={className}>
				<li className='nav-link'>
					<Link
						to='services'
						activeClass='active'
						smooth={true}
						spy={true}
					>{t('header.navigation-1')}
					</Link>
				</li>
				<li className='nav-link'>
					<Link
						to='advantages'
						activeClass='active'
						smooth={true}
						spy={true}>{t('header.navigation-2')}
					</Link>
				</li>
				<li className='nav-link'>
					<Link
						to='our-results'
						activeClass='active'
						smooth={true}
						spy={true}>{t('header.navigation-3')}
					</Link>
				</li>
				<li className='nav-link'>
					<Link
						to='our-results'
						activeClass='active'
						smooth={true}
						spy={true}>{t('header.navigation-4')}
					</Link>
				</li>
				<li className='nav-link'>
					<Link
						to='our-results'
						activeClass='active'
						smooth={true}
						spy={true}>{t('header.navigation-5')}
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Nav