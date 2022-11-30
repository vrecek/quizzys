import Cookie from 'universal-cookie'

type GamesQuestionsCorrectFav = [number, number, number, string]
type KnownCategories = { 
    name: string
    value: number
}

export default class Cookies {
    private static cookie: Cookie = new Cookie()
    private static YEAR: number = 1000 * 60 * 60 * 24 * 30 * 12


    private static setCookie(cookieName: string, value: number): void {
        this.cookie.set(cookieName, value, {
            maxAge: this.YEAR
        })
    }


    public static isAllowed(): boolean {
        return !!this.cookie.get('isAllowed')
    }
    public static toggleAllow(): void {
        if(this.isAllowed()) {

            this.cookie.remove('isAllowed')

            this.cookie.remove('get-tg')
            this.cookie.remove('get-tq')
            this.cookie.remove('get-cq')

            this.cookie.remove('get-ac')
            this.cookie.remove('get-fc')

            return

        }

        this.cookie.set('isAllowed', true)
    }


    public static setTotalGames(value: number): void {
        this.setCookie('get-tg', value)
    }
    public static setTotalQuestions(value: number): void {
        this.setCookie('get-tq', value)
    }
    public static setTCorrectQuestions(value: number): void {
        this.setCookie('get-cq', value)
    }
    

    public static calculateFavouriteCategory(category: string, totalQuestions: number): void {
        const currentCategories: KnownCategories[] = this.cookie.get('akc') ?? [],
              index: number = currentCategories.findIndex(x => x.name === category)


        index !== -1
            ? currentCategories[index].value += totalQuestions
            : currentCategories.push({ name: category, value: totalQuestions })


        const highestCategory: string = currentCategories.reduce((p, c) => p.value > c.value ? p : c).name

        this.cookie.set('get-fc', highestCategory)
        this.cookie.set('akc', currentCategories)
    }


    public static getTotalGames(): number {
        return parseInt(this.cookie.get('get-tg') ?? '0')
    }
    public static getTotalQuestions(): number {
        return parseInt(this.cookie.get('get-tq') ?? '0')
    }
    public static getTCorrectQuestions(): number {
        return parseInt(this.cookie.get('get-cq') ?? '0')
    }
    public static getFavouriteCategory(): string {
        return this.cookie.get('get-fc') ?? '-'
    }


    public static getAllInformations(): GamesQuestionsCorrectFav {
        return [
            this.getTotalGames(),
            this.getTotalQuestions(),
            this.getTCorrectQuestions(),
            this.getFavouriteCategory()
        ]
    }
}