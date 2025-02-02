import Connector from '../engine/Connector.mjs';

/**
 *
 */
export default class Doujins extends Connector {

    /**
     *
     */
    constructor() {
        super();
        super.id = 'doujins';
        super.label = 'Doujins';
        this.tags = [];
        this.url = 'https://doujins.com';
    }

    _getMangaList( callback ) {
        callback( new Error( 'Please report this broken website on HakuNeko\'s GitHub project page.' ), undefined );
    }
    _getChapterList( manga, callback ) {
        callback( new Error( 'Please report this broken website on HakuNeko\'s GitHub project page.' ), undefined );
    }
    _getPageList( manga, chapter, callback ) {
        callback( new Error( 'Please report this broken website on HakuNeko\'s GitHub project page.' ), undefined );
    }
}