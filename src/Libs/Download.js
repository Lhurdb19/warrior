const Download = () => {
    const link = document.createElement("a");
    link.href = "https://www.dropbox.com/scl/fi/2rgz8emhm3hq2bf4ew9hi/Horlatech__web.pdf?rlkey=4nrl3qek0x1i7cvoui6gyv9ev&st=y1dzysas&dl=1"; // Note the change from dl=0 to dl=1
    // link.href = "https://www.dropbox.com/scl/fi/dfwwp72657jr9p98nippm/OSENI-WASIU-ADEBAYO.docx?rlkey=jvxmz23q44nqbma0fmftjinjv&st=dno1k44a&dl=1"
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

export default Download;