<script setup>

import Checkbox from '../../src/components/Checkbox.vue';
import ClickShow from '../../src/components/ClickShow.vue';
import Collapse from '../../src/components/Collapse.vue';
import Hover from '../../src/components/Hover.vue';
import { default as DansInput } from '../../src/components/Intake.vue';
import Plot from '../../src/components/Plot.vue';
import Modal from '../../src/components/Modal.vue';
import Radio from '../../src/components/Radio.vue';
import Search from '../../src/components/Search.vue';
import Dropdown from '../../src/components/Dropdown.vue';
import utils from '../../src/utils.js';

import '../../src/dans.css';

</script>

<template>
  <div class="row">
    <form class="spaced">
      <DansInput
        v-model="sin"
        name="sin"
        label="SIN"
        @keyup.enter="alert(sin)"
      />
      <DansInput
        v-model="phoneNumber"
        name="phone_number"
        type="number"
        label="phone number"
        @keyup.enter="alert(phoneNumber)"
      />
      <Radio
        v-model="flavor"
        name="flavor"
        :options="[
          { name: 'French Vanilla', value: 'vanilla' },
          { name: 'Chocolate Supreme', value: 'chocolate' },
          { name: 'Fruit Party', value: 'strawberry' },
          { name: 'Other', value: null },
        ]"
      />
      <p>selected flavor is: {{ flavor }}</p>
      <Search label="Eye Color" name="eye_color" :options="searchOptions" />
      <div>
        <Dropdown
          v-model="answer"
          label="answer"
          name="answer"
          :options="[
            { name: 'Yes.', value: 1 },
            { name: 'No.', value: 2 },
            { name: 'Maybe.', value: 3 },
            { name: 'I don\'t know.', value: 4 },
            { name: 'Can you repeat the question?', value: 5 },
          ]"
        />
      </div>
      <p>answer: {{ answer }}</p>
      <div>
        <input type="submit" value="submit">
      </div>
    </form>
    <div class="row-end spaced">
      <div class="col spaced">
        <Modal button-text="?" container-class="m1">
          <p style="font-size: 500px; margin: 0">👻</p>
        </Modal>
        <Modal button-text="??">
          <div class="row m1">
            <p style="font-size: 800px; margin: 0">👻</p>
            <p style="font-size: 700px; margin: 0">👻<br>👻</p>
          </div>
        </Modal>
        <div>
          <Checkbox v-model="ok" label="OK" />
          <div :style="{ visibility: ok ? 'visible' : 'hidden' }">OK</div>
        </div>
      </div>
    </div>
  </div>
  <div class="col spaced">
    <div class="row">
      <button @click="toast('Hello, the time is ' + (new Date()).toISOString())">hello</button>
    </div>
  </div>
  <Plot
    :width="plotWidth"
    :height="400"
    :entries="plotEntries"
    @keydown="alert($event.key)"
    @mousemove="plotHoverUpdate($event)"
  />
  <Hover v-if="plotHover.show" :left="plotHover.left" :top="plotHover.top">
    {{ plotHover.text }}
  </Hover>
  <Collapse label="Secret Books" class="m1t" kb-key="b">
    <Collapse label="Necronomicon" kb-key="n">
      Klaatu Verata Niktu
    </Collapse>
    <div>Horcruxes</div>
    <div>Introduction to Necromancy</div>
    <div>Romeo and Juliet by William Shakespeare (4362)</div>
    <div>A Room with a View by E. M. Forster (3762)</div>
    <div>Middlemarch by George Eliot (3714)</div>
    <div>Moby Dick; Or, The Whale by Herman Melville (3627)</div>
    <div>Little Women; Or, Meg, Jo, Beth, and Amy by Louisa May Alcott (3493)</div>
    <div>The Enchanted April by Elizabeth Von Arnim (3450)</div>
    <div>The Complete Works of William Shakespeare by William Shakespeare (3421)</div>
    <div>The Blue Castle: a novel by L. M. Montgomery (3376)</div>
    <div>Cranford by Elizabeth Cleghorn Gaskell (3281)</div>
    <div>The Adventures of Ferdinand Count Fathom — Complete by T. Smollett (3263)</div>
    <div>The Expedition of Humphry Clinker by T. Smollett (3194)</div>
    <div>The Adventures of Roderick Random by T. Smollett (3187)</div>
    <div>History of Tom Jones, a Foundling by Henry Fielding (3149)</div>
    <div>Twenty Years After by Alexandre Dumas (3037)</div>
    <div>My Life — Volume 1 by Richard Wagner (3027)</div>
    <div>Pride and Prejudice by Jane Austen (1374)</div>
    <div>Noli Me Tangere by José Rizal (1164)</div>
    <div>Frankenstein; Or, The Modern Prometheus by Mary Wollstonecraft Shelley (1025)</div>
    <div>Alice's Adventures in Wonderland by Lewis Carroll (853)</div>
    <div>Ang "Filibusterismo" (Karugtóng ng Noli Me Tangere) by José Rizal (709)</div>
    <div>Needler by Randall Garrett (687)</div>
    <div>The Picture of Dorian Gray by Oscar Wilde (519)</div>
    <div>A Tale of Two Cities by Charles Dickens (518)</div>
    <div>The ethics of Hercules : by Robert Chenault Givler (516)</div>
    <div>A Doll's House : a play by Henrik Ibsen (502)</div>
    <div>Dracula by Bram Stoker (493)</div>
    <div>The Great Gatsby by F. Scott Fitzgerald (479)</div>
    <div>The Brothers Karamazov by Fyodor Dostoyevsky (440)</div>
    <div>The Importance of Being Earnest: A Trivial Comedy for Serious People by Oscar Wilde (423)</div>
    <div>The Count of Monte Cristo, Illustrated by Alexandre Dumas (396)</div>
    <div>The Adventures of Sherlock Holmes by Arthur Conan Doyle (395)</div>
    <div>Great Expectations by Charles Dickens (394)</div>
    <div>Moby Multiple Language Lists of Common Words by Grady Ward (389)</div>
    <div>Metamorphosis by Franz Kafka (387)</div>
    <div>Why do we die? by T. Bodley Scott (379)</div>
    <div>The Kama Sutra of Vatsyayana by Vatsyayana (369)</div>
    <div>The Prince by Niccolò Machiavelli (351)</div>
    <div>The Strange Case of Dr. Jekyll and Mr. Hyde by Robert Louis Stevenson (343)</div>
    <div>Ulysses by James Joyce (339)</div>
    <div>The diagnostics and treatment of tropical diseases by Edward R. Stitt (337)</div>
    <div>The Iliad by Homer (333)</div>
    <div>The Prophet by Kahlil Gibran (327)</div>
    <div>Jane Eyre: An Autobiography by Charlotte Brontë (311)</div>
    <div>A Modest Proposal by Jonathan Swift (310)</div>
    <div>Crime and Punishment by Fyodor Dostoyevsky (309)</div>
    <div>The Yellow Wallpaper by Charlotte Perkins Gilman (305)</div>
    <div>Adventures of Huckleberry Finn by Mark Twain (304)</div>
    <div>War and Peace by graf Leo Tolstoy (303)</div>
    <div>Meditations by Emperor of Rome Marcus Aurelius (298)</div>
    <div>Grimms' Fairy Tales by Jacob Grimm and Wilhelm Grimm (297)</div>
    <div>Peter Pan by J. M. Barrie (294)</div>
    <div>The Reign of Greed by José Rizal (289)</div>
    <div>The Romance of Lust: A classic Victorian erotic novel by Anonymous (284)</div>
    <div>The Scarlet Letter by Nathaniel Hawthorne (282)</div>
    <div>Don Quixote by Miguel de Cervantes Saavedra (281)</div>
    <div>The slang dictionary : by John Camden Hotten (275)</div>
    <div>Calculus Made Easy by Silvanus P. Thompson (274)</div>
    <div>Beyond Good and Evil by Friedrich Wilhelm Nietzsche (271)</div>
    <div>Tractatus Logico-Philosophicus by Ludwig Wittgenstein (268)</div>
    <div>The Philippines a Century Hence by José Rizal (261)</div>
    <div>The Republic by Plato (258)</div>
    <div>The Adventures of Tom Sawyer, Complete by Mark Twain (253)</div>
    <div>Wuthering Heights by Emily Brontë (252)</div>
    <div>The divine comedy by Dante Alighieri (249)</div>
    <div>Treasure Island by Robert Louis Stevenson (249)</div>
    <div>Anne of Green Gables by L. M. Montgomery (246)</div>
    <div>The Souls of Black Folk by W. E. B. Du Bois (240)</div>
    <div>Thus Spake Zarathustra: A Book for All and None by Friedrich Wilhelm Nietzsche (240)</div>
    <div>The Odyssey by Homer (234)</div>
    <div>Heart of Darkness by Joseph Conrad (230)</div>
    <div>Winnie-the-Pooh by A. A. Milne (230)</div>
    <div>Harvard episodes by Charles Macomb Flandrau (225)</div>
    <div>Walden, and On The Duty Of Civil Disobedience by Henry David Thoreau (219)</div>
    <div>A Christmas Carol in Prose; Being a Ghost Story of Christmas by Charles Dickens (218)</div>
    <div>The War of the Worlds by H. G. Wells (212)</div>
    <div>Emma by Jane Austen (212)</div>
    <div>Dubliners by James Joyce (211)</div>
    <div>Overtones, a book of temperaments : by James Huneker (211)</div>
    <div>Sense and Sensibility by Jane Austen (207)</div>
    <div>The Tragical History of Doctor Faustus by Christopher Marlowe (206)</div>
    <div>The Great Controversy Between Christ and Satan by Ellen Gould Harmon White (203)</div>
    <div>Florante at Laura by Francisco Balagtas (201)</div>
    <div>The King James Version of the Bible (200)</div>
    <div>The Rámáyan of Válmíki, translated into English verse by Valmiki (200)</div>
    <div>Les Misérables by Victor Hugo (198)</div>
    <div>Beautiful end by Constance Holme (193)</div>
    <div>Little Women by Louisa May Alcott (193)</div>
    <div>A Pickle for the Knowing Ones by Timothy Dexter (190)</div>
    <div>The Confessions of St. Augustine by Bishop of Hippo Saint Augustine (189)</div>
    <div>Aesthetical and philosophical essays : by Friedrich Schiller (185)</div>
    <div>Notes from the Underground by Fyodor Dostoyevsky (183)</div>
    <div>Oliver Twist by Charles Dickens (181)</div>
    <div>Leviathan by Thomas Hobbes (181)</div>
    <div>On harelip and cleft palate by William Stewart Rose (179)</div>
    <div>Anna Karenina by graf Leo Tolstoy (178)</div>
    <div>The Time Machine by H. G. Wells (176)</div>
    <div>The Wonderful Wizard of Oz by L. Frank Baum (176)</div>
    <div>Essays of Michel de Montaigne — Complete by Michel de Montaigne (170)</div>
    <div>The Jungle Book by Rudyard Kipling (169)</div>
    <div>Struwwelpeter: Merry Stories and Funny Pictures by Heinrich Hoffmann (167)</div>
  </Collapse>
  <div class="col spaced">
    <div class="row">
      <ClickShow>
        <a href="https://www.duckduckgo.com" target="_blank">duckduckgo</a>
      </ClickShow>
    </div>
  </div>
  <Collapse label="Super Secret Books" kb-key="s" style="margin-top: 80rem">
    <div>Introduction to Thermodynamics</div>
  </Collapse>
</template>

<script>

export default {
  data() {
    return {
      sin: '',
      phoneNumber: 0,
      flavor: null,
      answer: null,
      plotHover: {
        show: false,
        top: 0,
        left: 0,
        text: '',
        timeout: null,
      },
      ok: false,
      toast: utils.toast,
    };
  },
  computed: {
    plotWidth() {
      return window.innerWidth - 16;
    },
    plotEntries() {
      const vertices = [];
      for (let i = 0; i < 10000; ++i) {
        const x = Math.random();
        const y = Math.random() * Math.random();
        vertices.push({
          x,
          y,
          r: Math.random() * x,
          g: Math.random() * y,
          b: Math.random() * ((2 * x - 1) ** 2 + (2 * y - 1) ** 2),
          a: Math.random() / 8,
        });
      }
      return [
        {
          name: '1',
          usage: 'static',
          mode: 'lines',
          vertices,
        },
      ];
    },
    searchOptions() {
      return [
        'Red',
        'Green',
        'Blue',
        'Brown',
        'Black',
      ];
    },
  },
  methods: {
    alert(msg) {
      alert(msg);
    },
    plotHoverUpdate(event) {
      this.plotHover.left = `${event.clientX}px`;
      this.plotHover.top = `calc(${event.clientY}px + 1rem)`;
      this.plotHover.show = true;
      this.plotHover.text = `${event.plotX} ${event.plotY}`;
      clearTimeout(this.plotHover.timeout);
      this.plotHover.timeout = setTimeout(
        () => {
          this.plotHover.show = false;
        },
        1000,
      );
    },
  },
};

</script>
