import { CloudinaryVideo, Transformation } from '@cloudinary/url-gen';
import { source } from '@cloudinary/url-gen/actions/overlay';
import { image, text, video } from '@cloudinary/url-gen/qualifiers/source';
import { scale } from '@cloudinary/url-gen/actions/resize';
import { TimelinePosition } from '@cloudinary/url-gen/qualifiers/video/TimelinePosition';
import { Position } from '@cloudinary/url-gen/qualifiers';
import { AnimatedAction } from '@cloudinary/url-gen/actions/animated';
import { fadeIn } from '@cloudinary/url-gen/actions/effect';
import { TextStyle } from '@cloudinary/url-gen/qualifiers/textStyle';
import { TextFitQualifier } from '@cloudinary/url-gen/qualifiers/textFit';
export let sendVideo = (image1: string,
  image2: string,
  image3: string,
  image4: string,
  image5: string,
  text1: string,
  text2: string,
  audio1: string,
  audio2: string) => new CloudinaryVideo('videos/jlqjhbiephbp4jarssac', { cloudName: 'dckpbahu0' })/* .resize(fill().width(100).height(150)) */
    .overlay(
      /* Audio text 1 */
      source(
        video(audio1).transformation(new Transformation().resize(scale().width("1").width(1)))
      ).timeline(new TimelinePosition().startOffset(6.5)).position(new Position().offsetX(0).offsetY(0))
    )
    .overlay(
      /* Audio text 2 */
      source(
        video(audio2).transformation(new Transformation().resize(scale().width("1").width(1)))
      ).timeline(new TimelinePosition().startOffset(14.5)).position(new Position().offsetX(0).offsetY(0))
    )
    .overlay(
      /* Logo */
      source(
        image(image1).transformation(new Transformation().resize(scale().width("720")).effect(fadeIn().duration(250))/* .animated(edit().delay(100)) */)
      )
        .timeline(new TimelinePosition().startOffset(0).duration(5.5)
        )
    )
    .overlay(
      /* 1 */
      source(
        image(image2).transformation(new Transformation().resize(scale().width("720")).effect(fadeIn().duration(250))/* .animated(edit().delay(100)) */)
      )
        .timeline(new TimelinePosition().startOffset(5.5).duration(4)
        )
    )
    .overlay(
      /* 2 */
      source(
        image(image3).transformation(new Transformation().resize(scale().width("720"))
      /* .videoEdit(trim().duration("4.0")).effect(fadeOut().duration(250)) *//* .animated(edit().delay(100)) */)
      )
        .timeline(new TimelinePosition().startOffset(9.5).duration(4)
        )
    )
    .overlay(
      /* 3 */
      source(
        image(image4).transformation(new Transformation().resize(scale().width("720"))/* .animated(edit().delay(100)) */)
      )
        .timeline(new TimelinePosition().startOffset(13.5).duration(4.3)
        )
    )
    .overlay(
      /* 4 */
      source(
        image(image5).transformation(new Transformation().resize(scale().width("720")).effect(fadeIn().duration(100))/* .animated(edit().delay(100)) */)
      )
        .timeline(new TimelinePosition().startOffset(17.8).duration(3)
        )
    ).overlay(
      /* Hide */
      source(
        image("images/mprg8mehhbhzozvdkcjc").transformation(new Transformation().resize(scale().width("200").height(100)))
      )
        .position(new Position().offsetX(500).offsetY(1200))
        .timeline(new TimelinePosition().startOffset(0)
        )
    )
    .overlay(
      /* Wao */
      source(
        image("images/xn5pwc3qkgcykbesiv3v").transformation(new Transformation().animated(new AnimatedAction()))
      )
        .timeline(new TimelinePosition().startOffset(12.5).duration(1.8)
        )
    ).overlay(
      /* Bomba */
      source(
        image("images/enhiabbad4spsvs6p0kw").transformation(new Transformation().resize(scale().width("720")))
      )
        .position(new Position())
        .timeline(new TimelinePosition().startOffset(5.5).duration(1)
        )
    )
    .overlay(
      /* Pug */
      source(
        image("images/icndeyer8pgcswecua5p")
      )
        .position(new Position().offsetX(280).offsetY(1000))
        .timeline(new TimelinePosition().startOffset(3).duration(4)
        )
    ).overlay(
      /* Policia corriendo */
      source(
        image("images/ws0wacmjicl6o99wvg1r")
      )
        .position(new Position().offsetX(-80).offsetY(100))
        .timeline(new TimelinePosition().startOffset(6.5).duration(3)
        )
    )
    .overlay(
      /* Toby */
      source(
        image("images/waplqsn9k79ufqxjubil").transformation(new Transformation().resize(scale().width("400")))
      )
        .position(new Position().offsetX(80).offsetY(750))
        .timeline(new TimelinePosition().startOffset(7).duration(4)
        )
    )
    .overlay(
      /* perro */
      source(
        image("images/vavdkhu5me3hvizlvlka").transformation(new Transformation().resize(scale().width("200")))
      )
        .position(new Position().offsetX(400).offsetY(100))
        .timeline(new TimelinePosition().startOffset(7).duration(4)
        )
    )
    .overlay(
      /* Primo */
      source(
        image("images/xpywjpft5t0nbtb9jsnq").transformation(new Transformation().resize(scale().width("200")))
      )
        .position(new Position().offsetX(30).offsetY(700))
        .timeline(new TimelinePosition().startOffset(10).duration(2.5)
        )
    ).overlay(
      /* Mario */
      source(
        image("images/rq1ldhlnv1k5h9zva2nq").transformation(new Transformation().resize(scale().width("200")))
      )
        .position(new Position().offsetX(100).offsetY(1000))
        .timeline(new TimelinePosition().startOffset(12).duration(3)
        )
    ).overlay(
      /* Doge */
      source(
        image("images/paa6x6ykdx66pfs5m4yx").transformation(new Transformation().resize(scale().width("200")))
      )
        .position(new Position().offsetX(100).offsetY(100))
        .timeline(new TimelinePosition().startOffset(14).duration(5)
        )
    )
    .overlay(
      /* dancing */
      source(
        image("images/kfuclvmfqi2cycicxocm").transformation(new Transformation().resize(scale().width("400")))
      )
        .position(new Position().offsetX(320).offsetY(900))
        .timeline(new TimelinePosition().startOffset(13).duration(4)
        )
    )
    .overlay(
      /* thinking */
      source(
        image("images/enbuulj4jqh5ovp6bto5").transformation(new Transformation().resize(scale().width("200")))
      )
        .position(new Position().offsetX(100).offsetY(900))
        .timeline(new TimelinePosition().startOffset(15).duration(3)
        )
    )
    .overlay(
      /* polish */
      source(
        image("images/ax51gpvntysc6bdy0dco").transformation(new Transformation().resize(scale().width("200")))
      )
        .position(new Position().offsetX(100).offsetY(200))
        .timeline(new TimelinePosition().startOffset(11).duration(3)
        )
    )
    .overlay(
      /* CJ */
      source(
        image("images/ayizdwbv68fhfclrhqiz").transformation(new Transformation().resize(scale().width("200")))
      )
        .position(new Position().offsetX(500).offsetY(200))
        .timeline(new TimelinePosition().startOffset(15).duration(5)
        )
    ).overlay(
      /* BOMba */
      source(
        image("images/enhiabbad4spsvs6p0kw").transformation(new Transformation().resize(scale().width("720")))
      )
        .position(new Position())
        .timeline(new TimelinePosition().startOffset(17.8).duration(1)
        )
    )
    .overlay(
      /* text fijo */
      source(
        text("Le pagamos 20 dolares a un editor para que nos haga un video publicitario ", new TextStyle("Arial", 50).textAlignment("center")).textColor("white").textFit(new TextFitQualifier(720))
      ).position(new Position().offsetX(50).offsetY(100))
        .timeline(new TimelinePosition().startOffset(0).duration(5.5)
        )
    ).overlay(
      /* text fijo */
      source(
        text(text1, new TextStyle("Arial", 40).textAlignment("center")).textColor("white").textFit(new TextFitQualifier(680)).transformation(new Transformation().addFlag("text_no_trim").backgroundColor("#070707"))
      ).position(new Position().offsetX(50).offsetY(500))
        .timeline(new TimelinePosition().startOffset(6.5).duration(5)
        )
    ).overlay(
      /* text fijo */
      source(
        text(text2, new TextStyle("Arial", 40).textAlignment("center")).textColor("white").textFit(new TextFitQualifier(680)).transformation(new Transformation().addFlag("text_no_trim").backgroundColor("#E52CD4"))
      ).position(new Position().offsetX(50).offsetY(500))
        .timeline(new TimelinePosition().startOffset(14.5).duration(3.3)
        )
    );