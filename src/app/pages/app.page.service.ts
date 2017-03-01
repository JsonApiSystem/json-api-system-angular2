/**
 * NAME : app.page.service
 * USER : FollowWinter
 * DATE : 27/02/2017
 * SUMMARY :
 */

export class AppPageService {
    _context: any

    constructor() {

    }

    get context() {
        return this._context
    }

    set context(context: any) {
        this._context = context
    }

    setContext(context: any) {
        this._context = context
    }
}