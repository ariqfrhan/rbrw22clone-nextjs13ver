import {
    createContext,
    ReactElement,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";
import { url } from "@/lib/api";
import { Ukm, UkmByCategory, ukmContext, detailType } from "./ukmTypes";
import axios from "axios";

let defaultValue = {} as ukmContext;

export const ukm = createContext(defaultValue);

export default function useProviderUkm() {
    const [home, setHome] = useState<Ukm[]>([]);
    const [detail, setDetail] = useState<detailType | null>(null);
    const [loadingHome, setLoadingHome] = useState(true);

    useEffect(() => {
        axios.get(url + 'ukm').then(response => {
            setHome(response.data);
            if (response.status === 200) {
                setLoadingHome(false);
            }
        })
    }, [])

    useEffect(() => {
        if (home.length === 0) return;

        const listIds = home.map(e => {
            return e.id;
        });

        const listSlugs = home.map(e => {
            return e.slug;
        })

        const detailTemp = {} as { slug: Ukm };

        home.forEach(ukm => {
            axios.get<Ukm>(url + 'ukm/' + ukm.id).then(response => {
                const slug = ukm.slug;
                detailTemp[slug as keyof detailType] = response.data;
                setDetail(detailTemp);
            })
        })
    }, [home])

    const ukmByCategory: UkmByCategory = useMemo(() => {
        if (home.length === 0) {
            return {
                Kesenian: [],
                Kesejahteraan: [],
                Khusus: [],
                Olahraga: [],
                Penalaran: [],
            };
        }

        const dataTemp: UkmByCategory = {
            Kesenian: [],
            Kesejahteraan: [],
            Khusus: [],
            Olahraga: [],
            Penalaran: [],
        };

        home.forEach(val => {
            switch (val.category) {
                case "Kesejahteraan":
					dataTemp.Kesejahteraan.push(val);
					break;
				case "Kesenian":
					dataTemp.Kesenian.push(val);
					break;
				case "Khusus":
					dataTemp.Khusus.push(val);
					break;
				case "Olahraga":
					dataTemp.Olahraga.push(val);
					break;
				case "Penalaran":
					dataTemp.Penalaran.push(val);
					break;
            }
        });

        return dataTemp;
    }, [home]);


    return { home, detail, ukmByCategory, loadingHome }
}

export function ProviderUkm({children} : {children: ReactElement}){
    const contextValue = useProviderUkm();
    return <ukm.Provider value={contextValue}>{children}</ukm.Provider>
}
