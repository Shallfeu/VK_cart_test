// I will use just plain fetch, but also know a lot of other libraries
// I worked with AsyncThunks, axios, ky, SSR fetch functions
// Here to save time will be fetch

// I never worked with React Query, unfortunately
// I read that ReactQuery will handle errors by itself

import {Fact} from "@/entities/Fact/model/types/fact.ts";

const fetchFact = (): Promise<Fact> =>
    fetch('https://catfact.ninja/fact')
        .then(res => res.json())

export default fetchFact()