const roomFilter = {
	filters: [
		// {
		// 	id: 1,
		// 	name: 'All Room',
		// 	filterData: 'filter-item',
		// },
		// {
		//   id: 2,
		//   name: "Luxury",
		//   filterData: "luxury",
		// },
		// {
		//   id: 3,
		//   name: "Single",
		//   filterData: "single",
		// },
		// {
		//   id: 4,
		//   name: "Small Suite",
		//   filterData: "suite",
		// },
		// {
		//   id: 5,
		//   name: "Family",
		//   filterData: "family",
		// },
	],
	projects: [
		{
			id: 1,
			image: '/img/luxury/point_event.jpg',
			title: 'Point Event',
			price: '134',
			class_s: 'col-xl-3 col-lg-4 mt-30',
			filter: ['suite'],
		},
		{
			id: 2,
			image: '/img/luxury/openness_index.jpg',
			title: 'Openness Index',
			price: '199',
			class_s: 'col-xl-6 col-lg-8 mt-30',
			filter: ['suite'],
		},
		{
			id: 3,
			image: '/img/luxury/monitoring_goverment.jpg',
			title: 'Monitoring government performance',
			price: '319',
			class_s: 'col-xl-3 col-lg-4 mt-30',
			filter: ['family'],
		},
		{
			id: 4,
			image: '/img/luxury/government_program_evaluation.png',
			title: 'Government program evaluation',
			price: '169',
			class_s: 'col-xl-6 col-lg-8 mt-30',
			filter: ['single'],
		},
		{
			id: 5,
			image: '/img/luxury/iraq_news_meter_project.jpg',
			title: 'Iraq News Meter Project',
			price: '249',
			class_s: 'col-xl-6 mt-30',
			filter: ['luxury'],
		},
	],
};

export default roomFilter;
