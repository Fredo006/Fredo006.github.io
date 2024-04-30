// constructor Video JS
const videoDepanStasiunTugu = videojs('depan_stasiun_tugu');
const videoDepanMallMalioboro_utara = videojs('depan_mall_malioboro');
const videoDepanOpticTuguMalioboro = videojs('depan_optic_tugu_malioboro');
const videoSungaiNgentakKaptenHaryadi = videojs('sungai_ngentak_kapten_haryadi');
const videoDepanGaleria = videojs('depan_galeria');
const videoSimpangDemangan_timur = videojs('simpang_demangan_hadap_timur');
const videoSimpangJokteng_timur = videojs('simpang_jokteng');

// source video link config for Video JS
const sourceDepanStasiunTugu = {
    src: "https://cctvjss.jogjakota.go.id/margo-utomo/Wisma-Ratih.stream/playlist.m3u8",
    type: 'application/x-mpegURL'
};

const sourceDepanMallMalioboro_utara = {
    src: "https://cctvjss.jogjakota.go.id/malioboro/Malioboro_6_Mall_Utara.stream/playlist.m3u8",
    type: 'application/x-mpegURL'
};

const sourceDepanOpticTuguMalioboro = {
    src: "https://cctvjss.jogjakota.go.id/margo-utomo/Optic-Tugu.stream/playlist.m3u8",
    type: 'application/x-mpegURL'
};

const sourceSungaiNgentakKaptenHaryadi = {
    src: "https://cctvjss.jogjakota.go.id/bpbd/BPBD_ngentak.stream/playlist.m3u8",
    type: 'application/x-mpegURL'
};

const sourceDepanGaleria = {
    src: "https://cctvjss.jogjakota.go.id/atcs/ATCS_Simpang_Galeria_TimurSelatan.stream/playlist.m3u8",
    type: 'application/x-mpegURL'
};

const sourceSimpangDemangan_timur = {
    src: "https://cctvjss.jogjakota.go.id/atcs/ATCS_Simpang_Demangan_View_Timur.stream/playlist.m3u8",
    type: 'application/x-mpegURL'
};

const sourceSimpangJokteng_timur = {
    src: "https://cctvjss.jogjakota.go.id/atcs/ATCS_joktengwetan.stream/playlist.m3u8",
    type: 'application/x-mpegURL'
}


// trigger source
videoDepanStasiunTugu.src(sourceDepanStasiunTugu);
videoDepanMallMalioboro_utara.src(sourceDepanMallMalioboro_utara);
videoDepanOpticTuguMalioboro.src(sourceDepanOpticTuguMalioboro);
videoSungaiNgentakKaptenHaryadi.src(sourceSungaiNgentakKaptenHaryadi);
videoDepanGaleria.src(sourceDepanGaleria);
videoSimpangDemangan_timur.src(sourceSimpangDemangan_timur);
videoSimpangJokteng_timur.src(sourceSimpangJokteng_timur);