// frontend call to get socail data
import { Experiance } from "../typings";

export const fetchExperiances = async () => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperiance`
	);

	const data = await res.json();
	const experiances: Experiance[] = data.experiances;

	//console.log(experiances);
	return experiances;
};
