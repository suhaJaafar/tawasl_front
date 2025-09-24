import { fetchInitiativeById } from '../../../utils/fetchInitiative';
import SEO from '@/components/seo';
import HeaderOne from '@/app/header/HeaderOne';
import BreadCrumb from '@/app/breadcrumb/breadcrumb';
import InitiativeDetailsContainer from './initiative-details-container';
import Footer from '@/app/footer/footer';
import ScrollToTopButton from '@/app/scroll-to-top/scrollToTop';

export default async function InitiativeDetails({ params }) {
	const initiative = await fetchInitiativeById(params.id);
	console.log('fetched initiative:', initiative);

	if (!initiative) {
		return <div>Initiative not found</div>;
	}
	return (
		<>
			<SEO pageTitle='Initiative Details' />
			<HeaderOne />
			<BreadCrumb
				title='Initiative Details'
				innerTitle='Initiative Details'
				bgImage='/img/banner/tawasl_library.jpg'
			/>
			<InitiativeDetailsContainer initiative={initiative} />
			<Footer />
			<ScrollToTopButton />
		</>
	);
}
