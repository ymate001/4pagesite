const getState = ({ getStore, setStore }) => {
	return {
		store: {
			products: [
				{
					productname: "Toyota",
					price: 27500,
					description: "2019 Toyota RAV4",
					image:
						"https://st.motortrend.com/uploads/sites/5/2018/03/2019-Toyota-RAV4-front-three-quarter-1-e1534263387791.jpg"
				},

				{
					productname: "Nissan",
					price: 25500,
					description: "2019 Nissan Rogue",
					image:
						"https://res.cloudinary.com/carsguide/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/2019-Nissan-X-Trail-ST-L-N-Sport-%282%29.jpg"
				},

				{
					productname: "Chevrolet",
					price: 24000,
					description: "2019 Chevrolet Equinox",
					image:
						"https://di-uploads-pod10.dealerinspire.com/chevycenter/uploads/2018/11/2019-Chevrolet-Equinox-Hero-Image.png"
				},

				{
					productname: "Honda",
					price: 25000,
					description: "2019 Honda CR-V",
					image:
						"https://st.motortrend.ca/uploads/sites/10/2016/10/2017-Honda-CR-V-front-three-quarter-studio.jpg"
				}
			],

			blog: [
				{
					picture:
						"https://upload.wikimedia.org/wikipedia/commons/8/84/Ski_Famille_-_Family_Ski_Holidays.jpg",
					title: "First Post",
					textpost:
						"kjkjsiuebhbjbyeqowcnkjbcygyiwehcjbwjcbuyghjriubwc"
				},
				{
					picture:
						"https://upload.wikimedia.org/wikipedia/commons/8/84/Ski_Famille_-_Family_Ski_Holidays.jpg",
					title: "Second Post",
					textpost:
						"kjkjsiuebhbjbyeqowcnkjbcygyiwehcjbwjcbuyghjriubwckjkjsiuebhbjbyeqowcnkjbcygyiwehcjbwjcbuyghjriubwc"
				}
			]
		},

		actions: {
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};
export default getState;
