import Link from 'next/link';
import { Main, Title } from '../..';
import styles from './style.module.scss';

export function LegalPrivacy() {
  return (
    <Main>
      <Title size={'medium'}>
        Política de Privacidade
      </Title>

      <p className={styles.paragraph}>
        A sua privacidade é importante para nós. É política do BOTCalvinho respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site <Link href={'/'}><strong>BOTCalvinho</strong></Link>, e outros sites que possuímos e operamos.
      </p>

      <p className={styles.paragraph}>
        Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço.
        Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento.
        Também informamos por que estamos coletando e como será usado.
      </p>

      <p className={styles.paragraph}>
        Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado.
        Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos,
        bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
      </p>

      <p className={styles.paragraph}>
        Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
      </p>

      <p className={styles.paragraph}>
        O nosso site pode ter links para sites externos que não são operados por nós.
        Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade
        por suas respectivas políticas de privacidade.
      </p>

      <p className={styles.paragraph}>
        Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
      </p>

      <p className={styles.paragraph}>
        O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais.
        Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto conosco.
      </p>

      <Title size={'small'} customClass={styles.title}>
        Compromisso do Usuário
      </Title>

      <p className={styles.paragraph}>
        O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o BOTCalvinho oferece no site e com caráter enunciativo,
        mas não limitativo:
      </p>

      <ul className={styles.paragraph}>
        <li className={styles.listItem}>
          Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;
        </li>
        <li className={styles.listItem}>
          Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, ERROR ou azar, qualquer tipo de pornografia ilegal, de apologia ao
          terrorismo ou contra os direitos humanos;
        </li>
        <li className={styles.listItem}>
          Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do BOTCalvinho, de seus fornecedores ou terceiros,
          para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar
          danos anteriormente mencionados.
        </li>
      </ul>

      <Title size={'small'} customClass={styles.title}>
        Mais informações
      </Title>

      <p className={styles.paragraph}>
        Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
      </p>

      <p className={styles.paragraph}>
        Esta política é efetiva a partir de <strong>28 Novembro de 2022</strong>
      </p>
    </Main>
  );
}

export function LegalUse() {
  return (
    <Main>
      <Title size={'small'} customClass={styles.title}>
        1. Termos
      </Title>

      <p className={styles.paragraph}>
        Ao acessar ao site <Link href={'/'}><strong>BOTCalvinho</strong></Link>, concorda em cumprir estes termos de serviço,
        todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.
        Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são
        protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
      </p>

      <Title size={'small'} customClass={styles.title}>
        2. Uso de Licença
      </Title>

      <p className={styles.paragraph}>
        É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site BOTCalvinho,
        apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e,
        sob esta licença, você não pode:
      </p>

      <ol className={styles.paragraph}>
        <li className={styles.listItem}>
          modificar ou copiar os materiais;
        </li>

        <li className={styles.listItem}>
          usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);
        </li>

        <li className={styles.listItem}>
          tentar descompilar ou fazer engenharia reversa de qualquer software contido no site BOTCalvinho;
        </li>

        <li className={styles.listItem}>
          remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou
        </li>

        <li className={styles.listItem}>
          transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.
        </li>
      </ol>

      <p className={styles.paragraph}>
        Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por BOTCalvinho a qualquer momento.
        Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em
        formato eletrónico ou impresso.
      </p>

      <Title size={'small'} customClass={styles.title}>
        3. Isenção de responsabilidade
      </Title>

      <ol className={styles.paragraph}>
        <li className={styles.listItem}>
          Os materiais no site da BOTCalvinho são fornecidos 'como estão'. BOTCalvinho não oferece garantias, expressas ou implícitas, e, por este meio,
          isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um
          fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
        </li>

        <li className={styles.listItem}>
          Além disso, o BOTCalvinho não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ou à confiabilidade do uso
          dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.
        </li>
      </ol>

      <Title size={'small'} customClass={styles.title}>
        4. Limitações
      </Title>

      <p className={styles.paragraph}>
        Em nenhum caso o BOTCalvinho ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou
        lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em BOTCalvinho, mesmo que BOTCalvinho ou
        um representante autorizado da BOTCalvinho tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições
        não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqüentes ou incidentais, essas limitações podem
        não se aplicar a você.
      </p>

      <Title size={'small'} customClass={styles.title}>
        5. Precisão dos materiais
      </Title>

      <p className={styles.paragraph}>
        Os materiais exibidos no site da BOTCalvinho podem incluir erros técnicos, tipográficos ou fotográficos. BOTCalvinho não garante que qualquer
        material em seu site seja preciso, completo ou atual. BOTCalvinho pode fazer alterações nos materiais contidos em seu site a qualquer momento,
        sem aviso prévio. No entanto, BOTCalvinho não se compromete a atualizar os materiais.
      </p>

      <Title size={'small'} customClass={styles.title}>
        6. Links
      </Title>

      <p className={styles.paragraph}>
        O BOTCalvinho não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado.
        A inclusão de qualquer link não implica endosso por BOTCalvinho do site. O uso de qualquer site vinculado é por conta e risco do usuário.
      </p>

      <Title size={'small'} customClass={styles.title}>
        Modificações
      </Title>

      <p className={styles.paragraph}>
        O BOTCalvinho pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar
        vinculado à versão atual desses termos de serviço.
      </p>

      <Title size={'small'} customClass={styles.title}>
        Lei aplicável
      </Title>

      <p className={styles.paragraph}>
        Estes termos e condições são regidos e interpretados de acordo com as leis do BOTCalvinho e você se submete irrevogavelmente à jurisdição
        exclusiva dos tribunais naquele estado ou localidade.
      </p>
    </Main>
  );
}
