export class RecipeSearchResult {
    matches: Recipe[];
}

export class Recipe {
    id:string;
    recipeName:string;
    ingredients:string;
    smallImageUrls:string;
    totalTimeInSeconds:number;
    rating:number
}

