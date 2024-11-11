"use strict";

// RNG

/**
 * 
 * @param {number} min 
 * @param {number} max 
 * 
 * @abstract Generates an integer from min to max (included);
 */
function randNumGen(min, max) {
    const rand = Math.floor(Math.random() * (max + min - 1)) + min;
    return rand;
}


