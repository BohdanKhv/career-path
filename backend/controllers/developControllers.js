const University = require('../models/universityModel');
const Job = require('../models/jobModel');
const Program = require('../models/programModel');
const cheerio = require('cheerio');
const axios = require('axios');


// download logo from google search
const downloadLogo = async (req, res) => {
    try {
        let count = 0;
        const university = await University.find({logo: {$exists: false}});

        for(let i = 0; i < university.length; i++) {
            const name = university[i].name.replaceAll(' ', '+');

            const base = `https://www.google.com/search?q=${name}logo&sxsrf=ALiCzsYIQj7WbASmJ-mZ4cpPvzFICx28Tg:1657570562333&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiXjbvE0_H4AhVLkokEHbSgDa8Q_AUoA3oECAEQBQ&biw=2560&bih=937&dpr=1`

            try {
                const html = await axios.get(base);
                const $ = cheerio.load(html.data, { normalizeWhitespace: true });

                const img = $('img').eq(1).attr('src');

                
                // console.log(img);
                // download image to img folder
                const imgName = university[i].unitid + '.png';
                const imgPath = `./img/${imgName}`;

                // const imgUrl = img.startsWith('http') ? img : url+img;

                try {
                    console.log(img);
                    const res = await axios.get(img, { responseType: 'arraybuffer' })

                    fs.writeFile(imgPath, res.data, 'binary', function(err) {
                        if(err) {
                            console.log(err);
                        }
                    });

                    university[i].logo = imgName;

                    await university[i].save();
                } catch (err) {
                    console.log(university[i].name);
                    console.log('error downloading image');

                    continue;
                }
            } catch (err) {
                console.log('error to get html');
                continue;
            }

            count++;
            console.log(count);
        }

        return res.status(200).json(count);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Server Error');
    }
}


const distinct = async (req, res) => {
    try {
        const data = [];

        // !Start Distinct major occupations
            // const ids = [];
            // const jobs = await Job.find({level: 'major'});

            // for(let i = 0; i < jobs.length; i++) {
            //     if(!ids.includes(jobs[i].occCode)) {
            //         ids.push(jobs[i].occCode);
            //         data.push({
            //             occCode: jobs[i].occCode,
            //             occTitle: jobs[i].occTitle,
            //         });
            //     }
            // }
        // !End Distinct major occupations

        // !Start Distinct detailed occupations
            // const ids = [];
            // const jobs = await Job.find({level: 'detailed'});

            // for(let i = 0; i < jobs.length; i++) {
            //     if(!ids.includes(jobs[i].occCode)) {
            //         ids.push(jobs[i].occCode);
            //         data.push({
            //             occCode: jobs[i].occCode,
            //             occTitle: jobs[i].occTitle,
            //         });
            //     }
            // }
        // !End Distinct detailed occupations
        
        const newData = await Job.distinct('state');

        return res.status(200).json(newData);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Server Error');
    }
}

module.exports = {
    downloadLogo,
    distinct
}