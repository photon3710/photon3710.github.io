var lib_matrix3 = {
    get_I3: function() {
        return [1, 0, 0, 0, 1, 0, 0, 0, 1]
    }
};

var lib_matrix4 = {

    get_I4: function() {
        return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
    },

    set_I4: function(a) {
        a[0] = 1;
        a[1] = 0;
        a[2] = 0;
        a[3] = 0;
        a[4] = 0;
        a[5] = 1;
        a[6] = 0;
        a[7] = 0;
        a[8] = 0;
        a[9] = 0;
        a[10] = 1;
        a[11] = 0;
        a[12] = 0;
        a[13] = 0;
        a[14] = 0;
        a[15] = 1
    },

    copyNew: function(a) {
        return [a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]]
    },

    transposeNew: function(a) {
        return [a[0], a[4], a[8], a[12], a[1], a[5], a[9], a[13], a[2], a[6], a[10], a[14], a[3], a[7], a[11], a[15]]
    },

    multNew: function(d, c) {
        return [d[0] * c[0] + d[1] * c[4] + d[2] * c[8] + d[3] * c[12], d[0] * c[1] + d[1] * c[5] + d[2] * c[9] + d[3] * c[13], d[0] * c[2] + d[1] * c[6] + d[2] * c[10] + d[3] * c[14], d[0] * c[3] + d[1] * c[7] + d[2] * c[11] + d[3] * c[15], d[4] * c[0] + d[5] * c[4] + d[6] * c[8] + d[7] * c[12], d[4] * c[1] + d[5] * c[5] + d[6] * c[9] + d[7] * c[13], d[4] * c[2] + d[5] * c[6] + d[6] * c[10] + d[7] * c[14], d[4] * c[3] + d[5] * c[7] + d[6] * c[11] + d[7] * c[15], d[8] * c[0] + d[9] * c[4] + d[10] * c[8] + d[11] * c[12], d[8] * c[1] + d[9] * c[5] + d[10] * c[9] + d[11] * c[13], d[8] * c[2] + d[9] * c[6] + d[10] * c[10] + d[11] * c[14], d[8] * c[3] + d[9] * c[7] + d[10] * c[11] + d[11] * c[15], d[12] * c[0] + d[13] * c[4] + d[14] * c[8] + d[15] * c[12], d[12] * c[1] + d[13] * c[5] + d[14] * c[9] + d[15] * c[13], d[12] * c[2] + d[13] * c[6] + d[14] * c[10] + d[15] * c[14], d[12] * c[3] + d[13] * c[7] + d[14] * c[11] + d[15] * c[15]]
    },

    multVectorNew: function(a, b) {
        return [a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3], a[4] * b[0] + a[5] * b[1] + a[6] * b[2] + a[7] * b[3], a[8] * b[0] + a[9] * b[1] + a[10] * b[2] + a[11] * b[3], a[12] * b[0] + a[13] * b[1] + a[14] * b[2] + a[15] * b[3]]
    },

    multVectorTransNew: function(a, b) {
        return [a[0] * b[0] + a[4] * b[1] + a[8] * b[2] + a[12] * b[3], a[1] * b[0] + a[5] * b[1] + a[9] * b[2] + a[13] * b[3], a[2] * b[0] + a[6] * b[1] + a[10] * b[2] + a[14] * b[3], a[3] * b[0] + a[7] * b[1] + a[11] * b[2] + a[15] * b[3]]
    }
};

var lib_matrix_projection = {

    get: function(g, c, f, e) {
        var d = Math.tan(lib_maths.degToRad(0.5 * g)),
            b = -(e + f) / (e - f),
            h = (-2 * e * f) / (e - f);
        return [0.5 / d, 0, 0, 0, 0, 0.5 * c / d, 0, 0, 0, 0, b, -1, 0, 0, h, 0]
    },

    getOrtho: function(c, b, f, e) {
        var d = b * c;
        return [1 / c, 0, 0, 0, 0, 1 / d, 0, 0, 0, 0, -2 / (e - f), 0, 0, 0, -(f + e) / (e - f), 1]
    }

};

var lib_matrix_rot3 = {

    set_inv_from_mv: function(a, b) {
        b[0] = a[0];
        b[1] = a[4];
        b[2] = a[8];
        b[3] = a[1];
        b[4] = a[5], b[5] = a[9];
        b[6] = a[2];
        b[7] = a[6], b[8] = a[10]
    }

};

var lib_matrix_rot4 = {

    rotateX: function(a, f) {
        var h = Math.cos(f);
        var d = Math.sin(f);
        var b = a[1],
            g = a[5],
            e = a[9];
        a[1] = a[1] * h - a[2] * d;
        a[5] = a[5] * h - a[6] * d;
        a[9] = a[9] * h - a[10] * d;
        a[2] = a[2] * h + b * d;
        a[6] = a[6] * h + g * d;
        a[10] = a[10] * h + e * d
    },

    rotateY: function(b, f) {
        var h = Math.cos(f);
        var e = Math.sin(f);
        var d = b[0],
            a = b[4],
            g = b[8];
        b[0] = h * b[0] + e * b[2];
        b[4] = h * b[4] + e * b[6];
        b[8] = h * b[8] + e * b[10];
        b[2] = h * b[2] - e * d;
        b[6] = h * b[6] - e * a;
        b[10] = h * b[10] - e * g
    },

    rotateZ: function(b, f) {
        var h = Math.cos(f);
        var e = Math.sin(f);
        var d = b[0],
            a = b[4],
            g = b[8];
        b[0] = h * b[0] - e * b[1];
        b[4] = h * b[4] - e * b[5];
        b[8] = h * b[8] - e * b[9];
        b[1] = h * b[1] + e * d;
        b[5] = h * b[5] + e * a;
        b[9] = h * b[9] + e * g
    }

};

var lib_matrix_mv = {

    translateRot: function(a, b) {
        a[12] += b[0] * a[0] + b[1] * a[4] + b[2] * a[8];
        a[13] += b[0] * a[1] + b[1] * a[5] + b[2] * a[9];
        a[14] += b[0] * a[2] + b[1] * a[6] + b[2] * a[10]
    },

    applyNew: function(a, b) {
        return [a[0] * b[0] + a[4] * b[1] + a[8] * b[2] + a[12] * b[3], a[1] * b[0] + a[5] * b[1] + a[9] * b[2] + a[13] * b[3], a[2] * b[0] + a[6] * b[1] + a[10] * b[2] + a[14] * b[3], b[3]]
    },

    do_inv_rot: function(b, c) {
        var a = c[0],
            d = c[1];
        c[0] = a * b[0] + d * b[1] + c[2] * b[2];
        c[1] = a * b[4] + d * b[5] + c[2] * b[6];
        c[2] = a * b[8] + d * b[9] + c[2] * b[10]
    },

    do_rot: function(b, c) {
        var a = c[0],
            d = c[1];
        c[0] = a * b[0] + d * b[4] + c[2] * b[8];
        c[1] = a * b[1] + d * b[5] + c[2] * b[9];
        c[2] = a * b[2] + d * b[6] + c[2] * b[10]
    },

    do_inv_rotNew: function(a, b) {
        return [b[0] * a[0] + b[1] * a[1] + b[2] * a[2], b[0] * a[4] + b[1] * a[5] + b[2] * a[6], b[0] * a[8] + b[1] * a[9] + b[2] * a[10]]
    },

    do_inv_mvNew: function(a, b) {
        return [a[0] * b[0] + a[1] * b[1] + a[2] * b[2] - a[12] * a[0] - a[13] * a[1] - a[14] * a[2], a[4] * b[0] + a[5] * b[1] + a[6] * b[2] - a[12] * a[4] - a[13] * a[5] - a[14] * a[6], a[8] * b[0] + a[9] * b[1] + a[10] * b[2] - a[12] * a[8] - a[13] * a[9] - a[14] * a[10]]
    },

    set_position: function(a, b) {
        a[12] = b[0];
        a[13] = b[1];
        a[14] = b[2]
    }
};

var lib_vector = {

    size: function(a) {
        return Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2])
    },

    add: function(b, a) {
        b[0] += a[0];
        b[1] += a[1];
        b[2] += a[2]
    },

    normalize: function(a) {
        var b = this.size(a);
        a[0] /= b;
        a[1] /= b;
        a[2] /= b
    },

    prodVect: function(b, a) {
        return [b[1] * a[2] - a[1] * b[2], b[2] * a[0] - b[0] * a[2], b[0] * a[1] - b[1] * a[0]]
    },

    to_spherical: function(a) {
        var d = this.size(a);

        var c = Math.acos(a[2] / d);

        var e = Math.acos(a[1] / Math.sqrt(a[0] * a[0] + a[1] * a[1]));

        var b = (a[0] >= 0) ? e : 2 * Math.PI - e;
        return [d, b, c]
    },

    dot: function(b, a) {
        return b[0] * a[0] + b[1] * a[1] + b[2] * a[2]
    },

    subNew: function(b, a) {
        return ([b[0] - a[0], b[1] - a[1], b[2] - a[2]])
    },

    halfNew: function(a) {
        return [a[0] * 0.5, a[1] * 0.5, a[2] * 0.5]
    },
    copy: function(a, b) {
        b[0] = a[0];
        b[1] = a[1];
        b[2] = a[2]
    },
    copyNew: function(a) {
        return [a[0], a[1], a[2]]
    },
    addHalfNew: function(b, a) {
        return [b[0] + 0.5 * a[0], b[1] + 0.5 * a[1], b[2] + 0.5 * a[2]]
    },
    det: function(c, b, a) {
        return c[0] * (b[1] * a[2] - b[2] * a[1]) - c[1] * (b[0] * a[2] - b[2] * a[0]) + c[2] * (b[0] * a[1] - b[1] * a[0])
    },
    fmaNew: function(d, c, b) {
        return [d[0] + b * c[0], d[1] + b * c[1], d[2] + b * c[2]]
    }
};

var lib_maths = {

    degToRad: function(a) {
        return a * Math.PI / 180
    }
};

if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (function() {
        return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame
    })()
}
if (!window.cancelRequestAnimationFrame) {
    window.cancelRequestAnimationFrame = (function() {
        return window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame
    })()
}
var lib_ajax = {
    get: function(b, c) {
        var a = new XMLHttpRequest();
        a.open("GET", b, true);
        a.onreadystatechange = function() {
            if (a.readyState == 4 && a.status == 200) {
                c(a.responseText)
            }
        };
        a.send()
    }
};

var lib_intersect = {
    normale_triangle: function(d) {
        var b = lib_vector.subNew(d[1], d[0]),
            a = lib_vector.subNew(d[2], d[0]);

        var c = lib_vector.prodVect(b, a);
        lib_vector.normalize(c);
        return c
    },
    abscisse_point_axis: function(d, b, c) {
        var a = lib_vector.subNew(c, d);
        return lib_vector.dot(a, b)
    },
    get_tri_arretes: function(a) {
        return [lib_vector.subNew(a[1], a[0]), lib_vector.subNew(a[2], a[1]), lib_vector.subNew(a[0], a[2])]
    },
    SAT: function(a, h, b, e) {
        var g = [],
            f = [],
            c, d = true;
        for (c = 0; c < a.length; c++) {
            g.push(this.abscisse_point_axis(e, b, a[c]))
        }
        g.sort(function(j, i) {
            return j - i
        });
        for (c = 0; c < h.length; c++) {
            f.push(this.abscisse_point_axis(e, b, h[c]))
        }
        f.sort(function(j, i) {
            return j - i
        });
        if ((g[0] > f[f.length - 1]) || (g[g.length - 1] < f[0])) {
            d = false
        }
        g = null;
        f = null;
        return d
    },
    intersect_boite_tri: function(d, f, e) {
        var a = [],
            o, n, m, k = [0, 0, 0],
            h, g, b;
        for (o = -0.5; o <= 0.5; o++) {
            for (n = -0.5; n <= 0.5; n++) {
                for (m = -0.5; m <= 0.5; m++) {
                    a.push([d[0] + o * f[0], d[1] + n * f[1], d[2] + m * f[2]])
                }
            }
        }
        var p = [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1]
        ];

        var c = this.get_tri_arretes(e);
        var l = this.normale_triangle(e);
        if (!this.SAT(a, e, l, k)) {
            return false
        }
        for (h = 0; h < 3; h++) {
            if (!this.SAT(a, e, p[h], k)) {
                return false
            }
        }
        for (h = 0; h < 3; h++) {
            for (g = 0; g < 3; g++) {
                b = lib_vector.prodVect(p[h], c[g]);
                lib_vector.normalize(b);
                if (!this.SAT(a, e, b, k)) {
                    return false
                }
            }
        }
        return true
    },
    get_AABB: function(d) {
        var a = lib_vector.copyNew(d[0]),
            b = lib_vector.copyNew(d[0]);
        var f, g;
        for (f = 0; f < d.length; f++) {
            for (g = 0; g < 3; g++) {
                if (d[f][g] < b[g]) {
                    b[g] = d[f][g]
                }
                if (d[f][g] > a[g]) {
                    a[g] = d[f][g]
                }
            }
        }
        var e = lib_vector.subNew(a, b);
        return {
            dim: e,
            centre: lib_vector.addHalfNew(b, e)
        }
    },
    plucker_vecteur: function(a, b) {
        return [a[0] * b[1] - a[1] * b[0], a[0] * b[2] - a[2] * b[0], a[0] - b[0], a[1] * b[2] - a[2] * b[1], a[2] - b[2], b[1] - a[1]]
    },
    plucker_axe: function(b, a) {
        return [b[0] * a[1] - b[1] * a[0], b[0] * a[2] - b[2] * a[0], -a[0], b[1] * a[2] - b[2] * a[1], -a[2], a[1]]
    },
    side: function(a, b) {
        return b[2] * a[3] + b[5] * a[1] + b[4] * a[0] + b[1] * a[5] + b[0] * a[4] + b[3] * a[2]
    },
    intersect_ray_tri: function(c, b) {
        var a = this.side(b[0], c);
        if (a * this.side(b[1], c) < 0) {
            return false
        }
        if (a * this.side(b[2], c) < 0) {
            return false
        }
        return true
    },
    intersection_point_ray_tri: function(b, f, j, g) {
        var e = lib_vector.subNew(b[1], b[0]),
            d = lib_vector.subNew(b[2], b[0]),
            i = lib_vector.subNew(f, b[0]);
        var c = lib_vector.det(i, e, d),
            h = lib_vector.det(j, e, d);
        if (h == 0) {
            return false
        }
        var a = -c / h;
        if (a > 0) {
            return false
        }
        return {
            I: lib_vector.fmaNew(f, j, a),
            d: -a,
            T: b,
            face: g
        }
    },
    intersect_ray_quad: function(c, b) {
        var a = this.side(b[0], c);
        if (a < 0) {
            return false
        }
        if (a * this.side(b[1], c) < 0) {
            return false
        }
        if (a * this.side(b[2], c) < 0) {
            return false
        }
        if (a * this.side(b[3], c) < 0) {
            return false
        }
        return true
    },
    plucker_tri: function(a, c, b) {
        return [this.plucker_vecteur(a, c), this.plucker_vecteur(c, b), this.plucker_vecteur(b, a)]
    },
    plucker_quad: function(a, d, c, b) {
        return [this.plucker_vecteur(a, d), this.plucker_vecteur(d, c), this.plucker_vecteur(c, b), this.plucker_vecteur(b, a)]
    },
    plucker_boite: function(h, g) {
        var f = [h[0] + 0.5 * g[0], h[1] - 0.5 * g[1], h[2] - 0.5 * g[2]],
            e = [h[0] + 0.5 * g[0], h[1] + 0.5 * g[1], h[2] - 0.5 * g[2]],
            b = [h[0] + 0.5 * g[0], h[1] + 0.5 * g[1], h[2] + 0.5 * g[2]],
            a = [h[0] + 0.5 * g[0], h[1] - 0.5 * g[1], h[2] + 0.5 * g[2]],
            l = [h[0] - 0.5 * g[0], h[1] - 0.5 * g[1], h[2] - 0.5 * g[2]],
            k = [h[0] - 0.5 * g[0], h[1] + 0.5 * g[1], h[2] - 0.5 * g[2]],
            j = [h[0] - 0.5 * g[0], h[1] + 0.5 * g[1], h[2] + 0.5 * g[2]],
            i = [h[0] - 0.5 * g[0], h[1] - 0.5 * g[1], h[2] + 0.5 * g[2]];
        return [this.plucker_quad(e, b, i, l), this.plucker_quad(f, a, j, k), this.plucker_quad(f, e, k, l), this.plucker_quad(a, b, j, i)]
    },
    intersect_ray_boite: function(b, a) {
        if (this.intersect_ray_quad(b, a[0])) {
            return true
        }
        if (this.intersect_ray_quad(b, a[1])) {
            return true
        }
        if (this.intersect_ray_quad(b, a[2])) {
            return true
        }
        if (this.intersect_ray_quad(b, a[3])) {
            return true
        }
        return false
    }
};
var GL, CV, JQCV, DBG = false,
    TEXTURECACHE, OMBRECONTENT, SQ = false;
var Contexte = (function() {
    return {
        instance: function(i) {
            var b = document.getElementById(i.canvas_id);
            CV = b;
            JQCV = $(CV);
            try {
                GL = b.getContext("experimental-webgl", {
                    antialias: true,
                    stencil: true
                })
            } catch (g) {
                alert("Vous n'êtes pas compatibles webgl !");
                notCompatible();
                return false
            }
            if (!GL) {
                notCompatible();
                return false
            }
            var j = Shaders.instance({});
            var f = Vue.instance({
                camera: [0, 0, -12],
                theta: 0,
                phi: 0,
                angle: 0,
                zMin: 1,
                zMax: 20
            });
            f.plein_ecran();
            var c = Navigation.instance({
                vue: f
            });
            c.set();
            var d = Scene.instance({
                vue: f,
                navigation: c
            });
            TEXTURECACHE = Texture.instance({
                url: "images/cache2.png",
                clamp: true
            });
            TEXTURENOCACHE = Texture.instance({
                url: "images/white.png",
                clamp: false
            });
            var a = Texture.instance({
                url: "images/parquet.jpg"
            });
            var h = Plane.instance({
                u: [0, 0, 40],
                v: [40, 0, 0],
                texture: a,
                s: 1,
                point: [-5, -3.1, -35],
                surbrillance: true
            });
            d.add_objet(h);
            lib_ajax.get("ressources/demos.json", function(e) {
                SQ = SphereQuads.instance({
                    content: JSON.parse(e),
                    a: 4,
                    b: 3
                });
                d.add_objet(SQ);
                d.start()
            });
            return true
        }
    }
})();
var Maillage = (function() {
    return {
        instance: function(a) {
            var f = VBO.instance({
                tableau_js: a.vertices
            });
            var e = VBO_indices.instance({
                tableau_js: a.indices
            });
            if (a.pluck) {
                var d = [],
                    b;
                for (b = 0; b < a.vertices.length / 8; b++) {
                    d.push([a.vertices[b * 8], a.vertices[b * 8 + 1], a.vertices[b * 8 + 2]])
                }
                var c = lib_intersect.plucker_quad(d[0], d[1], d[2], d[3])
            }
            return {
                intersect: function(i, g) {
                    var h = lib_intersect.plucker_axe(i, g);
                    return lib_intersect.intersect_ray_quad(h, c)
                },
                draw: function() {
                    f.draw();
                    e.draw()
                },
                drawShadow: function() {
                    f.drawShadow();
                    e.draw()
                }
            }
        }
    }
}());
var Objet = (function() {
    return {
        instance: function(i) {
            i.pickable = i.pickable || false;
            i.matrix = i.matrix || lib_matrix4.get_I4();
            i.aleas = i.aleas || [0, 0, 0, 0];
            var g = i.texture || false,
                h = lib_matrix4.copyNew(i.matrix),
                a = false,
                e = (i.surbrillance) ? true : false;
            var d = [0, 0, 0],
                b = [0, 0, 0];
            var c = [0, -0.6, 0, 1];
            var f = {
                set_position: function(j) {
                    lib_matrix_mv.set_position(h, j)
                },
                pick: function(m, j) {
                    var k = lib_matrix_mv.do_inv_rotNew(h, j);
                    var l = lib_matrix_mv.do_inv_mvNew(h, m);
                    return i.maillage.intersect(l, k)
                },
                set_picked: function() {
                    if (NAVIGATION.get_clic()) {
                        return false
                    }
                    if (!a) {
                        JQCV.css("cursor", "pointer")
                            .click(function(l) {
                                if (NAVIGATION.allowClick()) {
                                    window.open(f.demoURL)
                                }
                            });
                        var j = VUE.get2D(lib_matrix_mv.applyNew(h, c));
                        LABEL.html(f.name)
                            .css("left", j[0] + "px")
                            .css("top", j[1] + "px");
                        var k = 4 * (2 - j[2] * 2);
                        LABEL.css("webkitTransform", "scale(" + k + ")")
                            .css("MozTransform", "scale(" + k + ")");
                        LABEL.css("display", "block")
                    }
                    a = true;
                    return true
                },
                set_unpicked: function() {
                    if (a) {
                        JQCV.css("cursor", "move")
                            .unbind("click");
                        LABEL.css("display", "none")
                    }
                    a = false
                },
                draw: function() {
                    if (i.aleas) {
                        SHADERS.set_aleas(i.aleas)
                    }
                    if (g) {
                        g.draw()
                    }
                    SHADERS.set_surbrillance((a || e) ? 1 : 0.6);
                    SHADERS.set_matriceObjet(h);
                    i.maillage.draw()
                },
                drawShadow: function() {},
                drawQuadShadow: function() {
                    if (i.aleas) {
                        SHADERS.set_aleasShadow(i.aleas)
                    }
                    if (g) {
                        g.draw()
                    }
                    SHADERS.set_matriceObjetShadow(h);
                    i.maillage.drawShadow()
                },
                rotateX: function(j) {
                    lib_matrix_rot4.rotateX(h, j)
                },
                rotateY: function(j) {
                    lib_matrix_rot4.rotateY(h, j)
                },
                rotateZ: function(j) {
                    lib_matrix_rot4.rotateZ(h, j)
                },
                change_texture: function(j) {
                    g = j
                },
                drawPhysics: false,
                set_physics: function(j) {
                    f.drawPhysics = j
                },
                loaded: true
            };
            return f
        }
    }
})();
var Vue = (function() {
    return {
        instance: function(i) {
            i.camera = i.camera || [0, 0, 0];
            i.theta = i.theta || 0;
            i.phi = i.phi || 0;
            i.angle = i.angle || 45;
            i.zMin = i.zMin || 1;
            i.zMax = i.zMax || 10;
            i.a = i.a || CV.width / CV.height;
            var c = lib_matrix4.get_I4();
            var e;
            var g = Rayon.instance({});
            var a = function() {
                lib_matrix4.set_I4(c);
                lib_matrix_rot4.rotateY(c, i.theta);
                lib_matrix_rot4.rotateX(c, i.phi);
                lib_matrix_mv.translateRot(c, i.camera);
                b()
            };
            var d = function(j) {
                e = lib_matrix_projection.get(i.angle, j, i.zMin, i.zMax);
                g.set(e, CV.width, CV.height);
                b()
            };
            var h;
            var b = function() {
                var m = [0, -3.1, -0.2, 1];
                var l = lib_matrix_mv.applyNew(c, m);
                l = lib_matrix4.multVectorTransNew(e, l);
                l[0] /= l[3];
                l[1] /= l[3];
                var j = Math.round((l[0] * 0.5 + 0.5) * CV.width) - 57,
                    n = Math.round((l[1] * 0.5 + 0.5) * CV.height);
                CONTENT.css("left", j + "px")
                    .css("bottom", n + "px");
                TOTEM.css("left", (j + 180) + "px")
                    .css("bottom", (n - 50) + "px")
                    .css("display", "block");
                var k = FACEBOOKHOLDER.offset();
                FACEBOOK.css("left", k.left + "px")
                    .css("visibility", "visible");
                FACEBOOK.css("top", k.top + "px");
                FACEBOOKIFRAME.css("left", (k.left + 6) + "px")
                    .css("visibility", "visible");
                FACEBOOKIFRAME.css("top", (k.top + 20) + "px")
            };
            d(i.a);
            var f = {
                point: h,
                pick: function(k, j) {
                    if (SQ) {
                        g.lance(k, j, c, SQ.get_matriceScene(), i.camera)
                    }
                },
                draw: function() {
                    SHADERS.set_matriceVue(c);
                    SHADERS.set_matriceProjection(e);
                    SHADERS.set_camera(i.camera)
                },
                drawShadow: function() {
                    SHADERS.set_matricesVueShadow(e, c)
                },
                drawPhysics: function() {},
                get_matriceModeleVue: function() {
                    return lib_matrix4.multNew(c, e)
                },
                plein_ecran: function() {
                    var j = function(k) {
                        CV.width = window.innerWidth;
                        CV.height = window.innerHeight;
                        d(CV.width / CV.height);
                        if (CURRENTWIN) {
                            SCENE.draw();
                            SCENE.stop()
                        }
                    };
                    window.addEventListener("resize", j, true);
                    j()
                },
                get2D: function(j) {
                    var k = lib_matrix_mv.applyNew(SQ.get_matriceScene(), j);
                    k = lib_matrix_mv.applyNew(c, k);
                    k = lib_matrix4.multVectorTransNew(e, k);
                    return [Math.round((k[0] * 0.5 / k[3] + 0.5) * CV.width), CV.height - Math.round((k[1] * 0.5 / k[3] + 0.5) * CV.height), k[2] * 0.5 / k[3] + 0.5]
                },
                set_params: function(l, j, k) {
                    i.camera = l;
                    i.theta = j;
                    i.phi = k;
                    a()
                },
                moveAngles: function(j, k) {
                    i.theta += j;
                    i.phi += k;
                    a()
                },
                translateXVue: function(j) {
                    i.camera[0] += j * Math.cos(i.theta);
                    i.camera[2] += j * Math.sin(i.theta);
                    a()
                },
                translateZVue: function(j) {
                    i.camera[0] += j * Math.sin(i.theta);
                    i.camera[2] -= j * Math.cos(i.theta);
                    a()
                },
                log: function() {
                    console.log(i.theta, i.phi)
                }
            };
            a();
            b();
            VUE = f;
            return f
        }
    }
})();
var VUE;
var SCENE;
var Scene = (function() {
    return {
        instance: function(i) {
            i.navigation = i.navigation || false;
            var f = [],
                c = false;
            var e = function(l) {
                if (!l.loaded) {
                    return false
                }
                l.draw();
                return true
            };
            var h = function(l) {
                if (!l.loaded) {
                    return false
                }
                l.drawShadow();
                return true
            };
            var k = function(l) {
                if (l.drawPhysics) {
                    l.drawPhysics(l)
                }
            };
            GL.enable(GL.DEPTH_TEST);
            GL.depthFunc(GL.LEQUAL);
            GL.clearDepth(1);
            GL.enable(GL.BLEND);
            GL.blendFunc(GL.SRC_ALPHA, GL.ONE_MINUS_SRC_ALPHA);
            GL.enable(GL.STENCIL_TEST);
            GL.stencilOp(GL.KEEP, GL.INCR, GL.INCR);
            GL.stencilFunc(GL.EQUAL, 0, 255);
            GL.clearStencil(0);
            SHADERS.set_samplers();
            var b = 0;
            var a = lib_matrix4.get_I4();
            var d = false,
                j;
            var g = {
                draw: function(l) {
                    GL.viewport(0, 0, CV.width, CV.height);
                    GL.clearColor(0, 0, 0, 0);
                    GL.stencilMask(0);
                    GL.clear(GL.COLOR_BUFFER_BIT | GL.DEPTH_BUFFER_BIT);
                    SHADERS.set_time(b);
                    TEXTURENOCACHE.draw1();
                    i.vue.draw();
                    SHADERS.set_matriceScene(a);
                    f.map(e);
                    SHADERS.unset_shaderNormal();
                    SHADERS.set_shaderShadow();
                    SHADERS.set_timeShadow(b);
                    i.vue.drawShadow();
                    f.map(h);
                    SHADERS.unset_shaderShadow();
                    SHADERS.set_shaderNormal();
                    GL.flush();
                    c = window.requestAnimationFrame(SCENE.draw)
                },
                stop: function() {
                    window.cancelRequestAnimationFrame(c);
                    d = true;
                    NAVIGATION.disable();
                    clearInterval(j)
                },
                start: function() {
                    d = false;
                    NAVIGATION.enable();
                    j = setInterval("SCENE.drawPhysics()", 16);
                    g.draw()
                },
                drawPhysics: function() {
                    b += 0.08;
                    if (i.navigation) {
                        i.navigation.drawPhysics()
                    }
                    i.vue.drawPhysics();
                    f.map(k)
                },
                add_objet: function(l) {
                    f.push(l)
                },
                set_vue: function(l) {
                    i.vue = l
                }
            };
            SCENE = g;
            return g
        }
    }
})();
var SHADERS;
var Shaders = (function() {
    var p = function(J, H, G) {
        var I = GL.createShader(H);
        GL.shaderSource(I, J);
        GL.compileShader(I);
        if (!GL.getShaderParameter(I, GL.COMPILE_STATUS)) {
            alert("ERROR IN " + G + " : " + GL.getShaderInfoLog(I));
            return false
        }
        return I
    };
    var d = function(K, I, H) {
        var L = p(K, GL.VERTEX_SHADER, "VERTEX " + H);
        var G = p(I, GL.FRAGMENT_SHADER, "FRAGMENT " + H);
        var J = GL.createProgram();
        GL.attachShader(J, L);
        GL.attachShader(J, G);
        GL.linkProgram(J);
        return J
    };
    var r = "const vec3 LUM=vec3(0.,0.,0.);\nconst float Y=-2.9;\n\nattribute vec3 position, normal;\nattribute vec2 UV;\n\nuniform mat4 matrice_vue, matrice_projection, matrice_objet, matrice_scene;\nuniform vec3 camera;\nuniform float time2;\nuniform vec4 aleas;\n\nvarying vec2 vUV;\nvarying float Iv;\nvarying vec3 vPos;\n\n\nvoid main(void) {\n    vec2 mov=0.1*cos(aleas.zw+aleas.xy*time2);\n    vec4 pos0=matrice_objet * vec4(position+vec3(mov, 0.), 1.0);\n    vec4 pos=matrice_scene*pos0;\n\n    vec4 positionProjetee=matrice_projection * matrice_vue * pos;\n    vec3 N=vec3(matrice_scene*matrice_objet*vec4(normal, 0.));      //normale dans le referentiel scene\n\n\n    vUV=UV;\n    Iv=0.5;\n\n    vec3 L=normalize(vec3(pos)-LUM);\n\n    Iv+=0.5*max(dot(N,L),0.);           //illumination diffuse\n    vPos=vec3(pos0);\n\n    gl_Position = positionProjetee;\n}",
        C = "precision mediump float;\n\nuniform sampler2D sampler, samplerCache;\nuniform float surbrillance;\n\nuniform float time;\nvarying vec2 vUV;\nvarying vec3 vPos;\nvarying float Iv;\nconst vec4 COLORCOEFF=vec4(0.7,0.5,0.3,1.);\n\nvec4 fade(vec4 col, float s) {\n    float middle=0.33*(col.r+col.g+col.b);\n    vec4 bw=COLORCOEFF*vec4(middle, middle, middle, col.a);\n    return mix(bw, col, s);\n}\n\nvoid main(void) {\n    vec2 uv=vUV;    \n    vec4 couleurCache=texture2D(samplerCache, uv);    \n\n    vec4 texture_couleur;\n    float Ifog;\n    float I;\n\n    texture_couleur=texture2D(sampler, uv);\n    Ifog=1.5*(1.-smoothstep(3.,10.,length(vPos)));\n    //texture_couleur.rgb*=Iv;\n    texture_couleur*=vec4(Iv,Iv,Iv,1.);\n    \n    gl_FragColor = couleurCache*fade(Ifog*texture_couleur, surbrillance);\n}",
        v;
    var t, h, o, A, F, E, c, s, w, B, z, k, g, D;
    var l = "const vec3 LUM=vec3(0.,0.,0.);\nconst vec4 LUMOMBRE=vec4(-2.,4.,2., 1.);\nconst float Y=-2.9;\n\nattribute vec3 position;\nattribute vec2 UV;\n\nuniform mat4 matrice_vue, matrice_projection, matrice_objet, matrice_scene;\nuniform float time;\nuniform vec4 aleas;\n\nvarying vec2 vUV;\nvarying vec3 vPos;\n\n\nvoid main(void) {\n    vec2 mov=0.1*cos(aleas.zw+aleas.xy*time);\n    vec4 pos0=matrice_objet * vec4(position+vec3(mov, 0.), 1.0);\n    vec4 pos=matrice_scene*pos0;\n\n    float alpha=Y/(pos.y-LUMOMBRE.y);\n    pos=alpha*(pos-LUMOMBRE)+vec4(0.,0.,0.,1.);\n\n    vec4 positionProjetee=matrice_projection * matrice_vue * pos;\n//    vec4 positionProjetee=matrice_projection * matrice_vue * matrice_scene* matrice_objet * vec4(position,1.);\n    \n    vUV=UV;\n\n    vec3 L=normalize(vec3(pos)-LUM);\n\n    vPos=pos0.xyz;\n\n    gl_Position = positionProjetee;\n}",
        f = "\nprecision mediump float;\n\nuniform sampler2D samplerCache;\nvarying vec2 vUV;\nvarying vec3 vPos;\n\nvoid main(void) {\n    //gl_FragColor = vec4(1.,1.,1.,1.); return;\n    vec4 couleurCache=texture2D(samplerCache, vUV);\n\n    vec4 texture_couleur;\n    float Ifog;\n    float I;\n\n    if (vPos.y>2.) discard;\n    texture_couleur = vec4(0.,0.,0.,0.3);\n    Ifog=1.;\n    I=1.;\n\n    gl_FragColor = couleurCache*vec4(I*Ifog*(texture_couleur));\n\n}",
        a;
    var n, q, u, y, i, m, e, b, x;
    var j = {
        instance: function(G) {
            v = d(r, C, "NORMAL");
            h = GL.getUniformLocation(v, "matrice_projection");
            t = GL.getUniformLocation(v, "matrice_vue");
            o = GL.getUniformLocation(v, "matrice_objet");
            A = GL.getUniformLocation(v, "matrice_scene");
            B = GL.getUniformLocation(v, "camera");
            s = GL.getUniformLocation(v, "sampler");
            w = GL.getUniformLocation(v, "samplerCache");
            z = GL.getUniformLocation(v, "surbrillance");
            k = GL.getUniformLocation(v, "aleas");
            g = GL.getUniformLocation(v, "time");
            D = GL.getUniformLocation(v, "time2");
            F = GL.getAttribLocation(v, "position");
            E = GL.getAttribLocation(v, "normal");
            c = GL.getAttribLocation(v, "UV");
            a = d(l, f, "SHADOW");
            b = GL.getUniformLocation(a, "aleas");
            q = GL.getUniformLocation(a, "matrice_projection");
            u = GL.getUniformLocation(a, "matrice_objet");
            n = GL.getUniformLocation(a, "matrice_vue");
            y = GL.getUniformLocation(a, "matrice_scene");
            e = GL.getUniformLocation(a, "samplerCache");
            x = GL.getUniformLocation(a, "time");
            i = GL.getAttribLocation(a, "position");
            m = GL.getAttribLocation(a, "UV");
            GL.useProgram(a);
            GL.uniform1i(e, 0);
            SHADERS.set_shaderNormal()
        },
        set_shaderShadow: function() {
            GL.useProgram(a);
            GL.enableVertexAttribArray(i);
            GL.enableVertexAttribArray(m)
        },
        unset_shaderShadow: function() {
            GL.disableVertexAttribArray(i);
            GL.disableVertexAttribArray(m)
        },
        set_aleasShadow: function(G) {
            GL.uniform4fv(b, G)
        },
        set_matriceObjetShadow: function(G) {
            GL.uniformMatrix4fv(u, false, G)
        },
        set_vertexPointersShadow: function() {
            GL.vertexAttribPointer(i, 3, GL.FLOAT, false, 32, 0);
            GL.vertexAttribPointer(m, 2, GL.FLOAT, false, 32, 24)
        },
        set_timeShadow: function(G) {
            GL.uniform1f(x, G)
        },
        set_matricesVueShadow: function(H, G) {
            GL.uniformMatrix4fv(q, false, H);
            GL.uniformMatrix4fv(n, false, G)
        },
        set_matriceSceneShadow: function(G) {
            GL.uniformMatrix4fv(y, false, G)
        },
        set_shaderNormal: function() {
            GL.useProgram(v);
            GL.enableVertexAttribArray(F);
            GL.enableVertexAttribArray(E);
            GL.enableVertexAttribArray(c)
        },
        unset_shaderNormal: function() {
            GL.disableVertexAttribArray(F);
            GL.disableVertexAttribArray(E);
            GL.disableVertexAttribArray(c)
        },
        set_aleas: function(G) {
            GL.uniform4fv(k, G)
        },
        set_time: function(G) {
            GL.uniform1f(g, G);
            GL.uniform1f(D, G)
        },
        set_matriceScene: function(G) {
            GL.uniformMatrix4fv(A, false, G)
        },
        set_surbrillance: function(G) {
            GL.uniform1f(z, G)
        },
        set_matriceProjection: function(G) {
            GL.uniformMatrix4fv(h, false, G)
        },
        set_matriceVue: function(G) {
            GL.uniformMatrix4fv(t, false, G)
        },
        set_matriceObjet: function(G) {
            GL.uniformMatrix4fv(o, false, G)
        },
        set_camera: function(G) {
            GL.uniform3fv(B, G)
        },
        set_vertexPointers: function() {
            GL.vertexAttribPointer(F, 3, GL.FLOAT, false, 32, 0);
            GL.vertexAttribPointer(E, 3, GL.FLOAT, false, 32, 12);
            GL.vertexAttribPointer(c, 2, GL.FLOAT, false, 32, 24)
        },
        set_samplers: function() {
            GL.uniform1i(s, 0);
            GL.uniform1i(w, 1)
        }
    };
    SHADERS = j;
    return j
})();
var VBO = (function() {
    return {
        instance: function(a) {
            var b = GL.createBuffer();
            GL.bindBuffer(GL.ARRAY_BUFFER, b);
            GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(a.tableau_js), GL.STATIC_DRAW);
            return {
                draw: function() {
                    GL.bindBuffer(GL.ARRAY_BUFFER, b);
                    SHADERS.set_vertexPointers()
                },
                drawShadow: function() {
                    GL.bindBuffer(GL.ARRAY_BUFFER, b);
                    SHADERS.set_vertexPointersShadow()
                }
            }
        }
    }
})();
var VBO_indices = (function() {
    return {
        instance: function(b) {
            var c = GL.createBuffer();
            GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, c);
            GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(b.tableau_js), GL.STATIC_DRAW);
            var a = b.tableau_js.length;
            return {
                draw: function() {
                    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, c);
                    GL.drawElements(GL.TRIANGLES, a, GL.UNSIGNED_SHORT, 0)
                }
            }
        }
    }
})();
var Quad = (function() {
    return {
        instance: function(a) {
            var e = a.sx || 1,
                d = a.sy || 1;
            var b = function() {
                var f = 0.2 * (Math.random() - 0.5);
                f += (f > 0) ? 0.1 : -0.1;
                return f
            };
            var c = Objet.instance({
                texture: a.texture,
                aleas: [b(), b(), 6.28 * Math.random(), 6.28 * Math.random()],
                maillage: Maillage.instance({
                    vertices: [-e, -d, 0, 0, 0, 1, 1, 0, e, -d, 0, 0, 0, 1, 0, 0, e, d, 0, 0, 0, 1, 0, 1, -e, d, 0, 0, 0, 1, 1, 1],
                    indices: [0, 1, 2, 0, 2, 3],
                    pluck: true
                })
            });
            c.drawShadow = c.drawQuadShadow;
            c.rotateX(a.phi - Math.PI / 2);
            c.rotateY(Math.PI / 2 - a.theta);
            c.set_position(a.centre);
            return c
        }
    }
})();
var Plane = (function() {
    return {
        instance: function(b) {
            b.point = b.point || [0, 0, 0];
            b.u = b.u || [1, 0, 0];
            b.v = b.v || [0, 1, 0];
            b.s = b.s || 1;
            var e = b.point,
                c = b.u,
                a = b.v,
                d = b.s,
                h = lib_vector.size(b.u),
                f = lib_vector.size(b.v);
            var g = lib_vector.prodVect(b.u, b.v);
            lib_vector.normalize(g);
            b.maillage = Maillage.instance({
                vertices: [e[0], e[1], e[2], g[0], g[1], g[2], 0, 0, e[0] + c[0], e[1] + c[1], e[2] + c[2], g[0], g[1], g[2], 0, d * h, e[0] + c[0] + a[0], e[1] + c[1] + a[1], e[2] + c[2] + a[2], g[0], g[1], g[2], d * f, d * h, e[0] + a[0], e[1] + a[1], e[2] + a[2], g[0], g[1], g[2], d * f, 0],
                indices: [0, 2, 1, 0, 3, 2]
            });
            return Objet.instance(b)
        }
    }
})();
var Texture = (function() {
    return {
        instance: function(a) {
            var b = false,
                d = GL.createTexture(),
                f = new Image(),
                g = a.clamp || false;
            f.src = a.url;
            var e = function() {
                GL.pixelStorei(GL.UNPACK_FLIP_Y_WEBGL, true);
                GL.bindTexture(GL.TEXTURE_2D, d);
                GL.texImage2D(GL.TEXTURE_2D, 0, GL.RGBA, GL.RGBA, GL.UNSIGNED_BYTE, f);
                GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_MAG_FILTER, GL.LINEAR);
                GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_MIN_FILTER, GL.LINEAR);
                if (g) {
                    GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_WRAP_S, GL.CLAMP_TO_EDGE);
                    GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_WRAP_T, GL.CLAMP_TO_EDGE)
                }
                GL.bindTexture(GL.TEXTURE_2D, null);
                b = true
            };
            f.onload = function() {
                e()
            };
            var c = {
                is_loaded: function() {
                    return b
                },
                draw: function() {
                    if (!b) {
                        return false
                    }
                    GL.bindTexture(GL.TEXTURE_2D, d);
                    return true
                },
                draw1: function() {
                    if (!b) {
                        return false
                    }
                    GL.activeTexture(GL.TEXTURE1);
                    GL.bindTexture(GL.TEXTURE_2D, d);
                    GL.activeTexture(GL.TEXTURE0);
                    return true
                }
            };
            return c
        }
    }
})();
var BlenderObjet = (function() {
    return {
        instance: function(a) {
            var b = {
                loaded: false
            };
            lib_ajax.get(a.url, function(d) {
                var c = JSON.parse(d);
                b = Objet.instance({
                    pickable: a.pickable || false,
                    materiau: a.materiau || false,
                    texture: a.texture,
                    onpick: a.onpick || false,
                    onunpick: a.onunpick || false,
                    maillage: Maillage.instance({
                        vertices: c.vertices,
                        indices: c.indices,
                        octree: a.pickable || false
                    })
                });
                a.onloaded(b)
            });
            return b
        }
    }
})();
var Navigation = (function() {
    return {
        instance: function(m) {
            var r = 0.001,
                q = 0.001,
                a = 0.05,
                f, t;
            var i = false;
            var g = 0,
                e = 0;
            var n = [],
                s = [],
                d = false,
                j = 0,
                p = 0;
            var k = function(A, z) {
                window.addEventListener(A, z, false);
                s.push({
                    type: A,
                    handler: z
                })
            };
            var y = function(z) {
                d = true;
                f = z.pageX;
                t = z.pageY;
                j = z.pageX;
                p = z.pageY
            };
            var b = function(z) {
                if (z.touches.length !== 1) {
                    return
                }
                d = false;
                y({
                    pageX: z.touches[0].clientX,
                    pageY: z.touches[0].clientY
                })
            };
            var w = function(z) {
                d = false
            };
            var h = function(z) {
                w()
            };
            var c = function(A, z) {
                if (i) {
                    return
                }
                m.vue.pick(A.pageX, A.pageY);
                if (!d) {
                    return false
                }
                g = (A.pageX - j) * r, e = (A.pageY - p) * q;
                if (typeof(z) === "number") {
                    g *= z
                }
                SQ.turnMouse(-g, e); //rotate the sphere direction with mouse
                j = A.pageX;
                p = A.pageY
            };
            var v = function(z) {
                c({
                    pageX: z.touches[0].clientX,
                    pageY: z.touches[0].clientY
                }, 3)
            };
            var u = function(z) {
                z.preventDefault();
                if (n.indexOf(z.keyCode) != -1) {
                    return false
                }
                n.push(z.keyCode);
                return false
            };
            var o = function(A) {
                var z = n.indexOf(A.keyCode);
                if (z != -1) {
                    n.splice(z, 1)
                }
                A.preventDefault();
                return false
            };
            var x = function(z) {
                switch (z) {
                    case 37:
                        SQ.turnMouse(-0.01, 0);
                        break;
                    case 39:
                        SQ.turnMouse(0.01, 0);
                        break;
                    case 38:
                        break;
                    case 40:
                        break
                }
            };
            var l = {
                allowClick: function() {
                    return (Math.abs(j - f) + Math.abs(p - t) < 20)
                },
                disable: function() {
                    i = true
                },
                enable: function() {
                    i = false
                },
                drawPhysics: function() {
                    if (!d && SQ) {
                        g *= 0.9;
                        e *= 0.9;
                        SQ.turnMouse(g, e)
                    }
                    n.map(x)
                },
                get_clic: function() {
                    return d
                },
                set: function() {
                    k("mousedown", y);
                    k("mouseup", w);
                    k("mousemove", c);
                    k("keyup", o);
                    k("keydown", u);
                    k("touchstart", b);
                    k("touchend", h);
                    k("touchmove", v)
                },
                unset: function() {
                    s.map(function(z) {
                        window.removeEventListener(z.type, z.handler, false)
                    });
                    s = []
                }
            };
            NAVIGATION = l;
            return l
        }
    }
})();
var NAVIGATION;
var SphereQuads = (function() {
    return {
        instance: function(o) {
            var w = lib_matrix4.get_I4();
            var r = [],
                M = o.a || 1,
                L = o.b || 1,
                B = o.centre || [0, 0, 0],
                s = o.subVt || 15,
                E = o.subHt || 6;
            o.content.demos.map(function(a) {
                if (a.disable) {
                    return
                }
                a.imageURL = "ressources/images/jpg/" + a.image + ".jpg";
                var b = Texture.instance({
                    url: a.imageURL,
                    clamp: true
                });
                a.texture = b
            });
            var N = ["#ff892a", "#ff572a"],
                h = ["#ffd200", "#aeceff"];
            var q, g, z, A, d, D, m, I = 0,
                x, F, H = 0;
            var n = Math.PI / E,
                J, f;
            for (A = 0; A < E; A++) {
                g = A * n;
                f = Math.round(s * (Math.abs(Math.sin(g))));
                J = 2 * Math.PI / f;
                for (z = 0; z < f; z++) {
                    q = z * J;
                    d = M * Math.cos(q) * Math.sin(g) + B[0];
                    D = M * Math.sin(q) * Math.sin(g) + B[1];
                    m = L * Math.cos(g) + B[2];
                    x = o.content.demos[I % o.content.demos.length];
                    while (x.disable) {
                        I++;
                        x = o.content.demos[I % o.content.demos.length]
                    }
                    var u = Quad.instance({
                        centre: [d, m, D],
                        theta: q,
                        phi: g,
                        sx: 0.8,
                        sy: 0.55,
                        texture: x.texture
                    });
                    u.name = x.name;
                    u.demoURL = x.url;
                    r.push(u);
                    if (I < o.content.demos.length && !x.hide) {
                        var v = $("<a></a>")
                            .attr("href", x.url)
                            .attr("target", "_blank")
                            .attr("class", "demo");
                        v.append($("<img>")
                            .attr("src", x.imageURL));
                        v.append($("<div></div>")
                            .attr("class", "demoTitle")
                            .text(x.name));
                        if (x.description) {
                            var G = $("<div></div>")
                                .attr("class", "demoDescription")
                                .append($("<div></div>")
                                    .attr("class", "demoDescriptionInside")
                                    .html(x.description));
                            $("body")
                                .append(G);
                            v[0].description = G
                        }
                        v.mouseenter(function(a) {
                                window.zou = $(this);
                                $(this)
                                    .mousemove(a);
                                $(this)[0].description.animate({
                                    opacity: 1,
                                    display: "block"
                                }, TIMETRANSITION, function() {})
                            })
                            .mouseleave(function(a) {
                                $(this)[0].description.css("display", "none")
                                    .css("opacity", "0")
                            })
                            .mousemove(function(p) {
                                var l = $(this)[0].description;
                                var j = $(this)
                                    .offset();
                                var P = $(this)
                                    .position();
                                var b = P.left - 10,
                                    a = P.top - 85,
                                    T = parseInt($(this)
                                        .css("marginLeft")),
                                    S = parseInt($(this)
                                        .css("marginTop"));
                                var O = Math.round(j.top),
                                    i = Math.round(j.left);
                                var Q = p.pageX,
                                    t = p.pageY,
                                    R = $(this)
                                    .width() + 2 * T;
                                if ((p.pageX - i > R / 2 && b >= 2 * R) || b > 2 * R) {
                                    i -= 2 * R
                                } else {
                                    i += R
                                }
                                if (a > R) {
                                    O -= R - S - 1
                                }
                                l.css("left", i + "px")
                                    .css("top", O + "px")
                                    .css("display", "block")
                            });
                        if (H % 2 == 0) {
                            v.css("backgroundColor", N[0]);
                            G.css("backgroundColor", h[0]);
                            v.hover(function() {
                                $(this)
                                    .css("backgroundColor", h[0])
                            }, function() {
                                $(this)
                                    .css("backgroundColor", N[0])
                            })
                        } else {
                            v.css("backgroundColor", N[1]);
                            G.css("backgroundColor", h[1]);
                            v.hover(function() {
                                $(this)
                                    .css("backgroundColor", h[1])
                            }, function() {
                                $(this)
                                    .css("backgroundColor", N[1])
                            })
                        }
                        PORTFOLIO.append(v);
                        H++
                    }
                    I++
                }
            }
            $("#demos")
                .width(160 * 5);
            var C = lib_matrix4.get_I4();
            var y = function(a) {
                    if (a.loaded) {
                        a.draw()
                    }
                },
                c = function(a) {
                    if (a.loaded) {
                        a.drawShadow()
                    }
                };
            var K = 0.0005,
                e = 1;
            var k = K;
            var q = 0,
                g = 0;
            return {
                loaded: true,
                get_matriceScene: function() {
                    return w
                },
                pick: function(b, a) {
                    PICKED = false;
                    r.map(function(i) {
                        if (i.pick(b, a)) {
                            PICKED = i;
                            i.set_picked()
                        } else {
                            i.set_unpicked()
                        }
                    });
                    e = (PICKED) ? 0.9 : 1;
                    k = (PICKED) ? k : K
                },
                turn: function() {
                    k = K;
                    e = 1;
                    r.map(function(a) {
                        a.set_unpicked()
                    })
                },
                turnMouse: function(b, a) {
                    q -= b;
                    g += a;
                    g *= 0.9;
                    lib_matrix4.set_I4(w);
                    lib_matrix_rot4.rotateY(w, q);
                    lib_matrix_rot4.rotateX(w, g)
                },
                draw: function() {
                    TEXTURECACHE.draw1();
                    SHADERS.set_matriceScene(w);
                    r.map(y)
                },
                drawShadow: function() {
                    TEXTURECACHE.draw();
                    SHADERS.set_matriceSceneShadow(w);
                    r.map(c)
                },
                drawPhysics: function() {
                    k *= e;
                    if (!NAVIGATION.get_clic()) {
                        q += k
                    }
                }
            }
        }
    }
})();
var PICKED = false;
var Rayon = (function() {
    var c, h, b = [0, 0, 0],
        d, a, g, f, e = [0, 0, 0];
    return {
        instance: function(i) {
            return {
                set: function(l, j, k) {
                    c = l[0];
                    h = l[5];
                    d = (-1 / c) * (2 / j);
                    a = 1 / c;
                    g = (1 / h) * (2 / k);
                    f = -1 / h
                },
                lance: function(l, n, m, j, k) {
                    b[0] = (d * l + a);
                    b[1] = (g * n + f);
                    b[2] = 1;
                    lib_vector.normalize(b);
                    lib_matrix_mv.do_inv_rot(m, b);
                    lib_matrix_mv.do_inv_rot(j, b);
                    e[0] = -k[0];
                    e[1] = -k[1];
                    e[2] = -k[2];
                    e = lib_matrix_mv.do_inv_mvNew(j, e);
                    SQ.pick(e, b)
                }
            }
        }
    }
})();
var Boite = (function() {
    return {
        instance: function(k) {
            var f = lib_intersect.plucker_boite(k.C, k.dim);
            var d, l = [],
                b = [];
            for (var d = 0; d < k.faces.length; d++) {
                if (lib_intersect.intersect_boite_tri(k.C, k.dim, k.faces[d])) {
                    l.push(k.faces[d])
                }
            }
            var c = (l.length > k.maxFaces);
            if (!c) {
                var j, h, g;
                var e = lib_vector.halfNew(k.dim);
                for (j = -0.5; j <= 0.5; j++) {
                    for (h = -0.5; h <= 0.5; h++) {
                        for (g = -0.5; g <= 0.5; g++) {
                            b.push(Boite.instance({
                                C: [k.C[0] + j * k.dim[0] / 2, k.C[1] + h * k.dim[1] / 2, k.C[2] + g * k.dim[2] / 2],
                                dim: e,
                                faces: l,
                                maxFaces: k.maxFaces
                            }))
                        }
                    }
                }
            } else {
                var a = [];
                for (d = 0; d < l.length; d++) {
                    a.push(lib_intersect.plucker_tri(l[d][0], l[d][1], l[d][2]))
                }
            }
            return {
                is_feuille: function() {
                    return c
                },
                intersect: function(n, r, o) {
                    if (!lib_intersect.intersect_ray_boite(n, f)) {
                        return false
                    }
                    var m = 99999999,
                        q = false;
                    if (c) {
                        var p, s;
                        for (var p = 0; p < a.length; p++) {
                            if (lib_intersect.intersect_ray_tri(n, a[p])) {
                                s = lib_intersect.intersection_point_ray_tri(l[p], r, o);
                                if (s) {
                                    if (s.d < m) {
                                        m = s.d;
                                        q = s
                                    }
                                }
                            }
                        }
                    } else {
                        for (var p = 0; p < 8; p++) {
                            s = b[p].intersect(n, r, o);
                            if (s) {
                                if (s.d < m) {
                                    m = s.d;
                                    q = s
                                }
                            }
                        }
                    }
                    if (q) {
                        return q
                    }
                    return false
                }
            }
        }
    }
})();
var Octree = (function() {
    return {
        instance: function(l) {
            var b = [],
                a, i, h = l.indices.length / 3,
                g, e;
            for (g = 0; g < h; g++) {
                var m = [
                    [0, 0, 0],
                    [0, 0, 0],
                    [0, 0, 0]
                ];
                for (a = 0; a < 3; a++) {
                    e = l.indices[g * 3 + a];
                    for (i = 0; i < 3; i++) {
                        m[a][i] = l.vertices[e * l.vTaille + i]
                    }
                }
                b.push(m)
            }
            var k = [],
                d = l.vertices.length / l.vTaille;
            for (a = 0; a < d; a++) {
                k.push([l.vertices[a * l.vTaille], l.vertices[a * l.vTaille + 1], l.vertices[a * l.vTaille + 2]])
            }
            var c = lib_intersect.get_AABB(k);
            lib_vector.add(c.dim, [0.05, 0.05, 0.05]);
            var j = Boite.instance({
                C: c.centre,
                dim: c.dim,
                faces: b,
                maxFaces: 16
            });
            return {
                intersect: function(n, f) {
                    return j.intersect(lib_intersect.plucker_axe(n, f), n, f)
                }
            }
        }
    }
})();
var main = function() {
    BODY = $("body");
    LABEL = $("<div></div>")
        .attr("class", "demoLabel");
    TOTEM = $("#totem");
    FACEBOOK = $("#facebook");
    FACEBOOKIFRAME = $("#facebookIframe")
        .mouseenter(function(b) {
            FACEBOOK.css("opacity", 0.9)
        })
        .mouseleave(function(b) {
            FACEBOOK.css("opacity", 1)
        });
    FACEBOOKHOLDER = $("#facebookHolder");
    BODY.append(LABEL);
    PORTFOLIO = $("#demos");
    CONTENT = $("#content");
    TOTEMCONTENT = $("#totemContent");
    var a = Contexte.instance({
        canvas_id: "mon_canvas"
    });
    INSIDE = $("#inside");
    INSIDE.mousemove(function(b) {
            b.stopPropagation()
        })
        .mouseenter(function(b) {
            if (SQ) {
                SQ.turn()
            }
            PICKED = false
        });
    TOTEMCONTENT.mousemove(function(b) {
            b.stopPropagation()
        })
        .mouseenter(function(b) {
            if (SQ) {
                SQ.turn()
            }
            PICKED = false
        })
};
var CURRENTWIN = false;
var TIMETRANSITION = 500;
var PORTFOLIO = false;
var BODY, LABEL, TOTEM, TOTEMCONTENT;
var FACEBOOK, FACEBOOKIFRAME, FACEBOOKHOLDER;
var notCompatible = function() {
    var a = $("<div></div>")
        .attr("class", "notCompatibleWrapper");
    var b = $("<div></div>")
        .attr("class", "notCompatible");
    b.html("<p>ERROR: You are not webgl compatible. To view this website please :</p>              <ul><li>Use a webgl compatible web browser (Chrome, Firefox, Opera, Safari),              <li>Update your web browser,              <li>Update your graphic drivers.</ul>              <p>With Chrome you can diagnose the problem by entering chrome://gpu in the URL bar.</p>              <p>We are sorry for this disagreement.</p>");
    a.append(b);
    $("body")
        .append(a);
    FACEBOOK.css("visibility", "hidden");
    FACEBOOKIFRAME.css("visibility", "hidden");
    return false
};
var set_grayScale = function(a) {
    a.css("filter", "url(style/bw.svg#grayscale)")
        .css("WebkitFilter", "grayscale(1)")
};
var unset_grayScale = function(a) {
    a.css("filter", "none")
        .css("WebkitFilter", "grayScale(0)")
};
var openWindow = function(c) {
    if (CURRENTWIN) {
        return false
    }
    var b = $(c);
    b.click(function(d) {
        d.stopPropagation()
    });
    CURRENTWIN = b;
    var a = INSIDE.offset();
    b.css("left", a.left + "px");
    b.css("top", a.top + "px");
    b.css("display", "block");
    b.animate({
        left: "50%",
        top: "50%",
        width: "800px",
        height: "600px",
        marginLeft: "-400px",
        marginTop: "-300px",
        backgroundColor: "rgba(255,255,255,1)"
    }, TIMETRANSITION, function() {
        SCENE.stop();
        $(CV)
            .css("cursor", "crosshair")
            .unbind("click");
        CV.onclick = function() {
            closeWindow(c)
        };
        $(CV)
            .css("filter", "url(style/bw.svg#grayscale)")
            .css("WebkitFilter", "grayscale(1) blur(5px)");
        set_grayScale(CONTENT);
        set_grayScale(TOTEM)
    })
};
var closeWindow = function(c) {
    CV.onclick = null;
    var b = $(c);
    var a = INSIDE.offset();
    b.animate({
        left: a.left + "px",
        top: a.top + "px",
        width: "400px",
        height: "450px",
        backgroundColor: "rgba(255,255,255,0)",
        marginLeft: "0px",
        marginTop: "0px"
    }, TIMETRANSITION, function() {
        b.css("display", "none");
        unset_grayScale(CONTENT);
        unset_grayScale(TOTEM);
        unset_grayScale($(CV));
        CURRENTWIN = false;
        SCENE.start()
    })
};
var CONTENT = false,
    INSIDE = false;
