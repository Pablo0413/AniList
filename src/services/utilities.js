module.exports.typeToString = function (showType) {
    if (showType == null) return 'Unknown';
    switch (showType) {
        case 'tv':
            return 'TV Show';
        case 'movie':
            return 'Movie';
        case 'music': 
            return 'Music';
        case 'special':
            return 'Special';
        case 'ona':
            return 'Original net animation';
        case 'ova':
            return 'Original video animation';
    }
    return 'Unknown';
};
