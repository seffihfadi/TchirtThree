import express from 'express'
import { Configuration, OpenAIApi} from 'openai'

const DalleRouter = express.Router()

const configuration = new Configuration({
  apiKey: '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' ,
  organization: 'Personal'
});
const openai = new OpenAIApi(configuration)

// DalleRouter.route('/').get((req, res) => {
//   res.status(200).json({ message: "Hello from DALL.E ROUTES" })
// })

DalleRouter.post('/', async (req, res) => {
  try {
    const {prompt} = req.body
    const response = await openai.createImage({
      prompt,
      n: 1,
      size: '1024x1024',
    })
    const image_url = response.data.data[0].url;
    // console.log('res', response)
    // if (!!response) {
      // const image = response.data.data[0].b64_json
      res.status(200).json({photo: image_url || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIKAsEP7jdZjhozBl4vLPp7MAMvWfyNczxkg&usqp=CAU'})
    // } else {
    //   res.status(500).json({message: 'something went wrong'})
    // }
  } catch (error) {
    res.status(500).json({message: 'something went wrong, try later !'})
  }
})

export default DalleRouter