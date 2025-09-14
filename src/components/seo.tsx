'use client';
import { useEffect } from 'react';

const SEO = ({ pageTitle }: { pageTitle: string }) => {
	useEffect(() => {
		document.title = pageTitle + ' - Tawasoul Org.';
	}, [pageTitle]);

	return null;
};

export default SEO;
