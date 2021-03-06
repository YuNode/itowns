import togeojson from '@mapbox/togeojson';
import GeoJsonParser from 'Parser/GeoJsonParser';

/**
 * The GpxParser module provides a [parse]{@link module:GpxParser.parse}
 * method that takes a GPX in and gives an object formatted for iTowns
 * containing all necessary informations to display this GPX.
 *
 * @module GpxParser
 */
export default {
    /**
     * Parse a GPX file content and return a [FeatureCollection]{@link
     * module:GeoJsonParser~FeatureCollection}.
     *
     * @param {XMLDocument} gpx - The GPX file content to parse.
     * @param {GeoJsonParser~GeoJsonParserOptions} options - Options controlling the parsing.
     *
     * @return {Promise} A promise resolving with a [FeatureCollection]{@link
     * module:GeoJsonParser~FeatureCollection}.
     */
    parse(gpx, options) {
        return GeoJsonParser.parse(togeojson.gpx(gpx), options);
    },
};
