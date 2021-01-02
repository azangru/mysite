import React from "react";

import inflammationPdfPath from './pdfs/inflammation.pdf';
import mycobacteriaPdfPath from './pdfs/diagnosis-of-mycobacterial-infections-with-nested-PCR.pdf';
import yawpPdfPath from './pdfs/yawp-russian.pdf';

export default {
  healthSciencesTranslations: [
    {
      authors: 'J. O. Cooper, T. E. Heron, W. L. Heward',
      title: 'Applied Behavior Analysis (2nd edition)',
      publishingInfo: 'Pearson, 2007',
      commentary: '(translated chapters 1, 2, 14, 15)',
      imageFront: 'aba-eng.jpg',
      imageBack: 'aba-ru.jpg'
    },
    {
      authors: 'J.-D. Fine, H. Hinter (ed.)',
      title: 'Life with Epidermolysis Bullosa (EB)',
      publishingInfo: 'Springer-Verlag, 2010',
      commentary: '(co-edited the Russian translation)',
      imageFront: 'epidermolysis-bullosa-eng-2.jpg',
      imageBack: 'epidermolysis-bullosa-ru.jpg'
    },
    {
      authors: 'M. P. Schwellnus (ed.)',
      title: 'The Olympic Textbook of Medicine in Sport',
      publishingInfo: 'The Encyclopaedia of Sports Medicine. Volume XIV. Wiley-Blackwell. 2008',
      commentary: '(translated chapter 15)',
      imageFront: 'olympic-eng.jpg',
      imageBack: 'olympic-ru.jpg'
    },
    {
      authors: 'D. Perrin',
      title: 'Athletic Taping and Bracing, 2nd Edition',
      publishingInfo: 'Human Kinetics, 2005',
      commentary: '(edited the Russian translation; translated educational videos on the complementary DVD)',
      imageFront: 'taping-eng.jpg',
      imageBack: 'taping-ru.jpg'
    },
    {
      authors: 'P. McMahon (ed.)',
      title: 'Current Diagnosis and Treatment in Sports Medicine',
      publishingInfo: 'LANGE, 2006',
      commentary: '(translated chapters 2 and 5)',
      imageFront: 'sport-trauma-eng.jpg',
      imageBack: 'sport-trauma-ru.jpg'
    },
    {
      authors: 'K. Jones',
      title: 'Smith’s Recognizable Patterns Of Human Malformation, 6th Edition',
      publishingInfo: 'Saunders, 2005',
      commentary: '(translated a large portion of the book and edited the entire Russian translation)',
      imageFront: 'smith-eng.jpg',
      imageBack: 'smith-ru.jpg'
    },
    {
      authors: 'E. E. Moore, K. L. Mattox, D. V. Feliciano',
      title: 'Trauma Manual, 4th Edition',
      publishingInfo: 'McGraw-Hill, 2002',
      commentary: '(translated chapters 2 and 4)',
      imageFront: 'trauma-eng.jpg',
      imageBack: 'trauma-ru.jpg'
    },
    {
      authors: 'P. Holman, ‎J. Garrett, ‎W. D. Jansen',
      title: '100 Questions & Answers About Lymphoma',
      publishingInfo: 'Jones and Bartlett, 2004',
      commentary: '(edited the Russian translation)',
      imageFront: 'lymphoma-eng.jpg',
      imageBack: 'lymphoma-ru.jpg'
    },
    {
      authors: 'I. Damjanov',
      title: 'Pathology Secrets',
      publishingInfo: 'Hanley & Belfus, 2002',
      imageFront: 'pathology-secrets-eng.jpg',
      imageBack: 'pathology-secrets-ru.jpg'
    },
    {
      authors: 'S. Campbell, C. Lees',
      title: 'Obstetrics by Ten Teachers, 17th Edition',
      publishingInfo: 'CRC Press, 2000',
      imageFront: 'obstetrics-eng.jpg',
      imageBack: 'obstetrics-ru.jpg'
    },
  ],
  healthSciencesEditing: [
    {
      authors: 'A. P. Sereda',
      title: 'Hip Replacement: All Questions Answered',
      publishingInfo: 'Granat, 2014',
      commentary: '(original title: Середа А. П. Эндопротезирование тазобедренного сустава. Ответы на все вопросы. М.: Гранат, 2014. 121 с.)',
      imageFront: 'hip-replacement.jpg'
    },
    {
      authors: 'G. A. Melnichenko, V. A. Peterkova, A. N. Тulpakov, N. V. Maksimova',
      title: 'Eponymic Syndromes and Diseases in Endocrinology',
      publishingInfo: 'Practica, 2013',
      commentary: '(original title: Мельниченко Г. А., Петеркова В. А., Тюльпаков А. Н., Максимова Н. В. Эпонимические синдромы в эндокринологии. М.: Практика, 2013. 172 с.)',
      imageFront: 'eponyms-endocrinology.jpg'
    },
    {
      authors: 'N. N. Rozinova, N. S. Lev, A. E. Bogorad',
      title: 'Eponymic Syndromes and Diseases in Pulmonology',
      publishingInfo: 'Practica, 2011',
      commentary: '(original title: Розинова Н. Н., Лев Н. С., Богорад А. Е. Эпонимические синдромы в пульмонологии. М.: Практика, 2011. 87 с.)',
      imageFront: 'eponyms-pulmonology.jpg'
    },
  ],
  healthSciencesPapers: [
    (
      <span>
        <i>A. G. Azov, J. Koch, S. J. Hamilton-Dutoit.</i> Improved diagnosis of mycobacterial infections in formalin-fixed and paraffin-embedded sections with nested polymerase chain reaction // Acta Pathologica, Microbiologica et Immunologica Scandinavica. 113:589–93, 2005 (
          <a href={mycobacteriaPdfPath}>pdf</a>
        ).
      </span>
    )
  ],
  fictionTranslations: [
    {
      authors: 'Lewis Carroll and Martin Gardner',
      title: 'The Annotated Alice: The Definitive Edition',
      commentary: '(edited the Russian translation of Martin Gardner’s annotations)',
      imageFront: 'annotated-alice-eng.jpg',
      imageBack: 'annotated-alice-ru.jpg'
    },
    {
      authors: 'Gregory Maguire',
      title: 'Wicked: The Life and Times of the Wicked Witch of the West',
      imageFront: 'wicked-eng.jpg',
      imageBack: 'wicked-ru.jpg'
    },
    {
      authors: 'Meg Wolitzer',
      title: 'The Position',
      imageFront: 'wolitzer-eng.jpg',
      imageBack: 'wolitzer-ru.jpg'
    },
    {
      authors: 'Robert Buettner',
      title: 'Orphanage',
      imageFront: 'buettner-eng.jpg',
      imageBack: 'buettner-ru.jpg'
    },
    {
      authors: 'Susan Vreeland',
      title: 'Girl in Hyacinth Blue',
      imageFront: 'vreeland-eng.jpg',
      imageBack: 'vreeland-ru.jpg'
    },
    {
      authors: 'Douglas Coupland',
      title: 'Hey Nostradamus!',
      imageFront: 'nostradamus-eng.jpg',
      imageBack: 'nostradamus-ru.jpg'
    },
    {
      authors: 'P. G. Wodehouse',
      title: 'The Clicking of Cuthbert',
      imageFront: 'cuthbert-eng.jpg',
      imageBack: 'cuthbert-ru.jpg'
    }
  ],
  fictionEditing: [

  ],
  humanities: [
    {
      authors: 'A. G. Azov',
      title: 'The Literalists Defeated: An Episode from the History of Translation in the USSR in the 1920–1960s',
      commentary: '(original title: Азов А. Г. Поверженные буквалисты: Из истории художественного перевода в СССР в 1920—1960-е годы. М.: Издательский дом Высшей школы экономики, 2013. 300 с.)',
      imageFront: 'bukvalisty.jpg'
    }
  ],
  humanitiesPapers: {
    english: [
      <span>
        “Barbaric Yawp” in Russian // Rocznik Komparatystyczny (Comparative Yearbook). 2013. No. 4. P. 321–325 (
          <a href={yawpPdfPath}>pdf</a>
        ).
      </span>
    ],
    russian: [
      <span>
        О переиздании перевода «Посмертных записок Пиквикского клуба» под редакцией Густава Шпета // Текстология и историко-литературный процесс: II Международная конференция молодых исследователей (Москва, Московский государственный университет им. М. В. Ломоносова, филологический факультет, 21—22 марта 2013 г.): Сборник статей. М.: Лидер, 2014. С. 158–176 (
          <a href="http://tekstologia.jimdo.com/app/download/8704868093/Azov.pdf">pdf</a>
        ).
      </span>,
      <span>
        К истории теории перевода в Советском Союзе. Проблема реалистического перевода // Логос. 2012. № 3. С. 131–152 (
          <a href="http://www.logosjournal.ru/arch/22/art_163.pdf">pdf</a>
        ).
      </span>,
      <span>
        Воспаление: к истории слова и понятия // Вопросы русского языкознания: Сб. Вып. XIII. Фонетика и грамматика: настоящее, прошедшее, будущее: К 50‑летию научной деятельности Софьи Константиновны Пожарицкой / Сост. С. В. Князев, А. В. Птенцова; отв. ред. М. Л. Ремнёва, С. В. Князев. М.: Изд-во МГУ, 2010. С. 323–329 (
          <a href={inflammationPdfPath}>pdf</a>
        ).
      </span>
    ]
  }
};
