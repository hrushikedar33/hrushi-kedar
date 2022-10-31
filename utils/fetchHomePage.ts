// frontend call to get socail data
import { HomePage } from "../typings";

export const fetchHomePage = async () => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/getHomePage`
		// TODO: May be error in .env file due to url
	);

	const data = await res.json();
	const homePage: HomePage = data.homePage;

	// console.log(homePage);
	return homePage;
};
