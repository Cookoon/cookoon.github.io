import React from 'react';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton
} from 'react-accessible-accordion';

const Faq = () => (
  <Accordion>
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>
          Quelles sont les garanties ?
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <ul>
          <li>
            La responsabilité civile du locataire encourue vis-à-vis du
            propriétaire ;
          </li>
          <li>
            Les dommages aux biens : incendie, inondation , dégâts des eaux,
            vol/vandalisme, bris de glace (fenêtres, mobiliers en verre).
          </li>
        </ul>
        <p>
          Attention, cette assurance ne se substitue pas à l'assurance
          habitation. Les espaces mis en location sur Cookoon doivent être
          couverts par un contrat Multirisque Habitation ou un
          contratd'assurance spécifique en fonction du local loué.
        </p>
      </AccordionItemPanel>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>
          Qui est couvert par l'offre Cookoon en partenariat en AXA ?
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <ul>
          <li>
            Particulier ou professionnel ayant réservé un logement meublé via
            l'application ou le site Cookoon ;
          </li>
          <li>Son conjoint et ses enfants ;</li>
          <li>Toute autre personne participant à l'occupation du lieu.</li>
        </ul>
      </AccordionItemPanel>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>
          Quels sont les biens couverts par l'assurance ?
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <ul>
          <li>Les maisons ou villas</li>
          <li>Les appartements</li>
          <li>Les châteaux, chalets ou lodges</li>
          <li>Les dépendances de moins de 200 m2</li>
          <li>Les meubles contenus de dans la location meublée</li>
        </ul>
      </AccordionItemPanel>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>
          Quels sont les biens qui ne sont pas couverts par l'assurance ?
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <ul>
          <li>Les hôtels</li>
          <li>Les bâtiments classés monuments historiques</li>
          <li>
            Les chalets de haute montagne (inaccessibles aux véhicules de
            secours pendant au moins une partie de l'année)
          </li>
          <li>
            Les installations extérieures au bien loué (piscine, tennis, statues
            à demeure, bancs de pierre,…)
          </li>
          <li>
            Les objets de valeurs personnels (bijoux, objets d'arts...) et les
            fonds et valeurs de l'occupant (chèques, espèces, tickets cadeaux
            etc.)
          </li>
        </ul>
      </AccordionItemPanel>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>
          Quelles sont les garanties ?
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <p>
          La franchise est le montant qui reste à la charge du locataire en cas
          de sinistre.
        </p>
        <p>Le montant de la franchise applicable est égal à :</p>
        <ul>
          <li>Sur la garantie Dommages immobiliers : 350 euros</li>
          <li>
            Sur la garantie Dommages mobiliers : 200 euros (ex : porte de
            placard endommagée)
          </li>
        </ul>
      </AccordionItemPanel>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>
          Que faire en cas d'incident ?
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <p>
          En cas d'incident, il appartient à l'occupant de le déclarer dans les
          délais indiqués ci-dessous. Si l'hôte constate, après l'occupation, un
          sinistre qui n'a pas été porté à sa connaissance par l'occupant, il
          lui appartient alors de le déclarer.
        </p>
        <ul>
          <li>dans les 2 jours ouvrés pour le vol</li>
          <li>
            dans les 10 jours de la publication de l'arrêté interministériel
            constatant l'état de catastrophe naturelle s'il s'agit de dommages
            mettant en œuvre l'assurance de ce risque
          </li>
          <li>dans les 5 jours pour les autres cas.</li>
        </ul>
      </AccordionItemPanel>
    </AccordionItem>
  </Accordion>
);

export default Faq;
